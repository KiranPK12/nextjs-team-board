import { api } from "@/convex/_generated/api";
import { auth, currentUser } from "@clerk/nextjs";
import { Liveblocks } from "@liveblocks/node";
import { ConvexHttpClient } from "convex/browser";

const liveblocks = new Liveblocks({
  secret:
    "sk_dev_HAsPxgCUs-js0NtTOB1ZM8W6_VGQHtDuBXCWDfjO5CMcDSWo7xZ99yUUXKB_PRYs",
});

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export async function POST(request: Request) {
  // get details about the authorization
  const authorization = await auth();
  //   gets the information about the current user
  const user = await currentUser();
  if (!authorization || !user) {
    return new Response("Unauthorized", { status: 403 });
  }

  //   gets the roomId from the URL
  const { room } = await request.json();
  const board = await convex.query(api.board.get, { id: room });


  if (board?.orgId !== authorization.orgId) {
    return new Response("Unauthorized", { status: 403 });
  }

  const userInfo = {
    name: user.firstName || "Teammate",
    picture: user.imageUrl,
  };
  const session = liveblocks.prepareSession(user.id, { userInfo });

  if (room) {
    session.allow(room, session.FULL_ACCESS);
  }
  const { status, body } = await session.authorize();
  return new Response(body, { status });
}
