// app/api/blogs/route.js
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page") || 1;
  const limit = searchParams.get("limit") || 10;
  const search = searchParams.get("search") || "";

  try {
    const res = await fetch(
      `http://www.greenpulsesolution.com/api/v1/blogs?page=${page}&limit=${limit}&search=${search}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await res.json();
    return new Response(JSON.stringify(data), {
      status: res.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Server Error", error }), {
      status: 500,
    });
  }
}
