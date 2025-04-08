import { useFetch } from "@hooks/useFetch";

type GitHubRepo = {
  stargazers_count: number;
};

const useGitHubStars = () => {
  const { data, loading, error } = useFetch<GitHubRepo>(
    "https://api.github.com/repos/technoph1le/quicksnip"
  );

  const starsAmount = data?.stargazers_count ?? 0;

  return { starsAmount, loading, error };
};

export default useGitHubStars;
