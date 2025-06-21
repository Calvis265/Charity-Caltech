import Link from "next/link"
import {
  Activity,
  ArrowUpRight,
  CreditCard,
  DollarSign,
  Users,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const recentVolunteers = [
    {
      name: 'Olivia Martin',
      email: 'olivia.martin@email.com',
      role: 'Mentor',
      avatar: 'https://placehold.co/100x100'
    },
    {
      name: 'Jackson Lee',
      email: 'jackson.lee@email.com',
      role: 'Event Staff',
      avatar: 'https://placehold.co/100x100'
    },
    {
      name: 'Isabella Nguyen',
      email: 'isabella.nguyen@email.com',
      role: 'Tutor',
      avatar: 'https://placehold.co/100x100'
    },
    {
      name: 'William Kim',
      email: 'will@email.com',
      role: 'Mentor',
      avatar: 'https://placehold.co/100x100'
    },
    {
      name: 'Sofia Davis',
      email: 'sofia.davis@email.com',
      role: 'Admin Help',
      avatar: 'https://placehold.co/100x100'
    }
]

export default function AdminDashboardPage() {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Donations
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">KES 45,231.89</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              New Volunteers
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12</div>
            <p className="text-xs text-muted-foreground">
              +18.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Success Stories</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+5</div>
            <p className="text-xs text-muted-foreground">
              +19% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Programs</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+6</div>
            <p className="text-xs text-muted-foreground">
              +2 since last quarter
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
              <CardTitle>Recent Donations</CardTitle>
              <CardDescription>
                Recent donations from your supporters.
              </CardDescription>
            </div>
            <Button asChild size="sm" className="ml-auto gap-1">
              <Link href="#">
                View All
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Donator</TableHead>
                  <TableHead className="hidden xl:table-cell">
                    Type
                  </TableHead>
                  <TableHead className="hidden xl:table-cell">
                    Status
                  </TableHead>
                  <TableHead className="hidden md:table-cell">
                    Date
                  </TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Liam Johnson</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      liam@example.com
                    </div>
                  </TableCell>
                  <TableCell className="hidden xl:table-cell">
                    Donation
                  </TableCell>
                  <TableCell className="hidden xl:table-cell">
                    <Badge className="text-xs" variant="outline">
                      Approved
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    2023-06-23
                  </TableCell>
                  <TableCell className="text-right">KES 2,500.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Olivia Smith</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      olivia@example.com
                    </div>
                  </TableCell>
                  <TableCell className="hidden xl:table-cell">
                    Donation
                  </TableCell>
                  <TableCell className="hidden xl:table-cell">
                    <Badge className="text-xs" variant="outline">
                      Approved
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    2023-06-24
                  </TableCell>
                  <TableCell className="text-right">KES 1,500.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Noah Williams</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      noah@example.com
                    </div>
                  </TableCell>
                  <TableCell className="hidden xl:table-cell">
                    Donation
                  </TableCell>
                  <TableCell className="hidden xl:table-cell">
                    <Badge className="text-xs" variant="outline">
                      Approved
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    2023-06-25
                  </TableCell>
                  <TableCell className="text-right">KES 3,500.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Emma Brown</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      emma@example.com
                    </div>
                  </TableCell>
                  <TableCell className="hidden xl:table-cell">
                    Donation
                  </TableCell>
                   <TableCell className="hidden xl:table-cell">
                    <Badge className="text-xs" variant="destructive">
                      Declined
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    2023-06-26
                  </TableCell>
                  <TableCell className="text-right">KES 4,500.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Liam Johnson</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      liam@example.com
                    </div>
                  </TableCell>
                  <TableCell className="hidden xl:table-cell">
                    Donation
                  </TableCell>
                  <TableCell className="hidden xl:table-cell">
                    <Badge className="text-xs" variant="outline">
                      Approved
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    2023-06-27
                  </TableCell>
                  <TableCell className="text-right">KES 5,500.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Volunteers</CardTitle>
            <CardDescription>
              New volunteers who signed up this month.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            {recentVolunteers.map((volunteer) => (
                <div key={volunteer.email} className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarImage src={volunteer.avatar} alt="Avatar" />
                    <AvatarFallback>{volunteer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">
                    {volunteer.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                    {volunteer.email}
                    </p>
                </div>
                <div className="ml-auto font-medium"><Badge variant="secondary">{volunteer.role}</Badge></div>
                </div>
            ))}
          </CardContent>
           <CardContent>
             <Button size="sm" className="w-full" asChild>
                <Link href="/admin/volunteers">Manage Volunteers</Link>
             </Button>
           </CardContent>
        </Card>
      </div>
    </>
  )
}
