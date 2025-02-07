import { auth,  } from "@clerk/nextjs/server"



export default async function DashboardPage() {


  const { userId, redirectToSignIn } = await auth()
 
  if (!userId) return redirectToSignIn()

  return (
    <>
      <div className="grid auto-rows-min gap-4 md:grid-cols-3 pb-4">
        <div className="aspect-video rounded-xl bg-muted/50" />
        <div className="aspect-video rounded-xl bg-muted/50" />
        <div className="aspect-video rounded-xl bg-muted/50" />
      </div>
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
    </>
  )
}
