import { SignedOut } from '@clerk/nextjs'
export default function DashboardPage() {
    return (
        <div>
            <h1>Dashboard</h1>
            <SignedOut />
        
        </div>
    );
}
