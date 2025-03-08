import {NextApiRequest, NextApiResponse} from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const query = {
        query: `
      {
        user(login: "filiptomanec") {
          contributionsCollection {
            contributionCalendar {
              totalContributions
            }
          }
        }
      }
    `
    };

    const response = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.GITHUB_TOKEN}` // BEZ NEXT_PUBLIC_
        },
        body: JSON.stringify(query)
    });

    if (!response.ok) {
        return res.status(response.status).json({error: "Failed to fetch data"});
    }

    const data = await response.json();
    res.status(200).json(data);
}
