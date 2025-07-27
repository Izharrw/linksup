import clientPromise from "@/lib/mongodb"

export async function POST(request) {
  try {
    const body = await request.json()
    const client = await clientPromise
    const db = client.db("linksup")
    const collection = db.collection("urls")

    //Check if the short url exists
    const doc = await collection.findOne({ shorturl: body.shorturl})
    if (doc) {
        return Response.json({ success: false , error: true, message: 'URL already exists!'})
    }

    const result = await collection.insertOne({
        url: body.url,
        shorturl: body.shorturl, 
    })
    return Response.json({ success: true, error: false, message: 'URL Generated successfully' })
  } catch (error) {
    console.error("API Error:", error); // This will show in Vercel logs
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}