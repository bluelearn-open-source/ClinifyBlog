import type { NextApiRequest, NextApiResponse } from 'next'
import admin from '../../../src/firebase/admin';
type Data = {
  slug: string,
  content?: any,
  error?: string
}

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const firestore = admin.firestore();
  const slug = req.query.slug as string;
  try {

    const doc = await firestore.collection('blogs').where("slug", "==", slug).get();
    const blog = doc.docs[0].data();
    if (blog.user) {
      blog.user = (await firestore.collection('users').doc(blog.user).get()).data();
    }
    if (blog.time) {
      blog.time = new Date(blog.time._seconds * 1000);
    }
    console.log(blog)
    res.status(200).json({ slug: slug, content: blog })
  } catch (error) {
    res.status(404).json(
      { error: error.message == "Cannot read property 'data' of undefined" ? "blog not found" : error.message, slug: slug });
  }
}