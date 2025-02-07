

import { SignedIn, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server"
export default async function UserProfile() {


    const user = await currentUser()
    return (
        <div className="gap-4 flex justify-center items-center">
            <SignedIn>
                สวัดดี คุณ, {user?.firstName}
                <UserButton />
            </SignedIn>
        </div>
    );
}
