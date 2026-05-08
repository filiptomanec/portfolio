import { NextApiRequest, NextApiResponse } from "next";

const GITHUB_USER = "filiptomanec";

const githubGraphQL = async (query: string) => {
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
    body: JSON.stringify({ query }),
  });
  if (!response.ok) {
    throw new Error(`GitHub API responded with ${response.status}`);
  }
  return response.json();
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const createdAtResponse = await githubGraphQL(`
            {
                user(login: "${GITHUB_USER}") {
                    createdAt
                }
            }
        `);

    const createdAt = new Date(createdAtResponse.data.user.createdAt);
    const now = new Date();
    const startYear = createdAt.getUTCFullYear();
    const endYear = now.getUTCFullYear();

    const aliases: string[] = [];
    for (let year = startYear; year <= endYear; year++) {
      const from =
        year === startYear
          ? createdAt.toISOString()
          : `${year}-01-01T00:00:00Z`;
      const to =
        year === endYear ? now.toISOString() : `${year}-12-31T23:59:59Z`;
      aliases.push(`
                y${year}: contributionsCollection(from: "${from}", to: "${to}") {
                    contributionCalendar {
                        totalContributions
                    }
                }
            `);
    }

    const totalsResponse = await githubGraphQL(`
            {
                user(login: "${GITHUB_USER}") {
                    ${aliases.join("\n")}
                }
            }
        `);

    const user = totalsResponse.data.user;
    const totalContributions = Object.keys(user)
      .filter((key) => key.startsWith("y"))
      .reduce(
        (sum, key) => sum + user[key].contributionCalendar.totalContributions,
        0,
      );

    res.status(200).json({ totalContributions });
  } catch {
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
