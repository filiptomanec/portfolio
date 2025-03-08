import {useQuery} from "@tanstack/react-query";

const fetchCommits = async () => {
    const response = await fetch("/api/github");
    const data = await response.json();
    return data.data.user.contributionsCollection.contributionCalendar.totalContributions;
};

const useGithubCommits = () => {
    const {data: commits, error, isLoading} = useQuery({
        queryKey: ["commits"],
        queryFn: fetchCommits,
    });

    if (isLoading) {
        return {commits: null, isLoading};
    }

    if (error) {
        console.error("Error fetching commits:", error);
        return {commits: 0, isLoading: false};
    }

    return {commits, isLoading: false};
};

export default useGithubCommits;
