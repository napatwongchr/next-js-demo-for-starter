// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  // data fromn database from supabase
  const users = [
    {
      name: "john",
    },
    {
      name: "a",
    },
  ];

  res.status(200).json({ data: users });
}
