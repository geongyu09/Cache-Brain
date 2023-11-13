import CardListContent from "@/components/pages/cards/CardListSection";
import { authOptions } from "@/service/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function UserDetailPage() {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (!session) redirect("/");
  return <CardListContent typeOwn={true} username={user!.username} />;
}
