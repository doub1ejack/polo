// A mock function to mimic making an async request for data
const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;

export const fetchCount = async (amount = 1) => {
  const response = await fetch(`${apiDomain}/api/counter`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount }),
  });
  const result: { data: number } = await response.json();

  return result;
};
