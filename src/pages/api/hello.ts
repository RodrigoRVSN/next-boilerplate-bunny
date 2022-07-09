import { NextApiRequest, NextApiResponse } from 'next';

export default function hello(req: NextApiRequest, res: NextApiResponse): void {
  res.status(200).json({ name: 'Rodrigo Victor' });
}
