
"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { PlusCircle, MoreHorizontal, Pencil, Trash2, Loader2, UserRound, Mail, Briefcase } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { addVolunteerAction, updateVolunteerAction, deleteVolunteerAction } from "./actions";


const volunteerSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email."),
  role: z.string().min(2, "Role must be at least 2 characters."),
  avatarFile: z.any().optional(),
});

type Volunteer = {
    id: string;
    name: string;
    email: string;
    role: string;
    avatar: string; // URL to the image
};

const initialVolunteers: Volunteer[] = [
    { id: '1', name: 'Olivia Martin', email: 'olivia.martin@email.com', role: 'Mentor', avatar: 'https://placehold.co/100x100' },
    { id: '2', name: 'Jackson Lee', email: 'jackson.lee@email.com', role: 'Event Staff', avatar: 'https://placehold.co/100x100' },
    { id: '3', name: 'Isabella Nguyen', email: 'isabella.nguyen@email.com', role: 'Tutor', avatar: 'https://placehold.co/100x100' },
    { id: '4', name: 'William Kim', email: 'will@email.com', role: 'Mentor', avatar: 'https://placehold.co/100x100' },
    { id: '5', name: 'Sofia Davis', email: 'sofia.davis@email.com', role: 'Admin Help', avatar: 'https://placehold.co/100x100' }
];

export default function VolunteersPage() {
    const { toast } = useToast();
    const [volunteers, setVolunteers] = React.useState<Volunteer[]>(initialVolunteers);
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [editingVolunteer, setEditingVolunteer] = React.useState<Volunteer | null>(null);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = React.useState(false);
    const [deletingVolunteerId, setDeletingVolunteerId] = React.useState<string | null>(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const [avatarPreview, setAvatarPreview] = React.useState<string | null>(null);

    const form = useForm<z.infer<typeof volunteerSchema>>({
        resolver: zodResolver(volunteerSchema),
        defaultValues: { name: "", email: "", role: "" },
    });

    const handleOpenModal = (volunteer: Volunteer | null) => {
        setEditingVolunteer(volunteer);
        if (volunteer) {
            form.reset({
                id: volunteer.id,
                name: volunteer.name,
                email: volunteer.email,
                role: volunteer.role,
            });
            setAvatarPreview(volunteer.avatar);
        } else {
            form.reset({ name: "", email: "", role: "" });
            setAvatarPreview(null);
        }
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingVolunteer(null);
        form.reset();
        setAvatarPreview(null);
    };

    const onSubmit = async (values: z.infer<typeof volunteerSchema>) => {
        setIsLoading(true);
        
        let newAvatarUrl = editingVolunteer?.avatar || 'https://placehold.co/100x100';
        if (values.avatarFile && values.avatarFile[0]) {
            newAvatarUrl = URL.createObjectURL(values.avatarFile[0]);
        }

        const volunteerDataForAction = {
            id: values.id,
            name: values.name,
            email: values.email,
            role: values.role
        };
        
        const result = editingVolunteer
            ? await updateVolunteerAction(volunteerDataForAction)
            : await addVolunteerAction(volunteerDataForAction);

        if (result.success) {
            toast({ title: result.message });
            if (editingVolunteer) {
                // Update existing volunteer in the local state
                setVolunteers(volunteers.map(v => 
                    v.id === editingVolunteer.id ? { ...v, ...values, avatar: newAvatarUrl } : v
                ));
            } else {
                // Add new volunteer to the local state
                const newVolunteer: Volunteer = {
                    id: (Math.random() * 10000).toString(), // Simulate a new ID
                    ...values,
                    avatar: newAvatarUrl,
                };
                setVolunteers([newVolunteer, ...volunteers]);
            }
            handleCloseModal();
        } else {
            toast({ variant: "destructive", title: "An error occurred", description: result.error });
        }
        setIsLoading(false);
    };

    const handleDelete = (id: string) => {
        setDeletingVolunteerId(id);
        setIsDeleteDialogOpen(true);
    };

    const confirmDelete = async () => {
        if (!deletingVolunteerId) return;

        setIsLoading(true);
        const result = await deleteVolunteerAction(deletingVolunteerId);
        if (result.success) {
            toast({ title: result.message });
            setVolunteers(volunteers.filter(v => v.id !== deletingVolunteerId));
        } else {
            toast({ variant: "destructive", title: "Deletion failed", description: result.error });
        }
        setIsLoading(false);
        setIsDeleteDialogOpen(false);
        setDeletingVolunteerId(null);
    };

    return (
        <Card>
            <CardHeader>
                <div className="flex justify-between items-center">
                    <div>
                        <CardTitle>Volunteers</CardTitle>
                        <CardDescription>Manage your volunteers and their roles.</CardDescription>
                    </div>
                    <Button onClick={() => handleOpenModal(null)}>
                        <PlusCircle className="mr-2 h-4 w-4" /> Add Volunteer
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="hidden w-[100px] sm:table-cell">
                                <span className="sr-only">Image</span>
                            </TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead className="hidden md:table-cell">Email</TableHead>
                            <TableHead>
                                <span className="sr-only">Actions</span>
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {volunteers.map((volunteer) => (
                            <TableRow key={volunteer.id}>
                                <TableCell className="hidden sm:table-cell">
                                    <Avatar className="h-10 w-10">
                                        <AvatarImage src={volunteer.avatar} alt={volunteer.name} />
                                        <AvatarFallback>{volunteer.name.split(' ').map(n=>n[0]).join('')}</AvatarFallback>
                                    </Avatar>
                                </TableCell>
                                <TableCell className="font-medium">{volunteer.name}</TableCell>
                                <TableCell>
                                    <Badge variant="outline">{volunteer.role}</Badge>
                                </TableCell>
                                <TableCell className="hidden md:table-cell">{volunteer.email}</TableCell>
                                <TableCell>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button aria-haspopup="true" size="icon" variant="ghost">
                                                <MoreHorizontal className="h-4 w-4" />
                                                <span className="sr-only">Toggle menu</span>
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                            <DropdownMenuItem onSelect={() => handleOpenModal(volunteer)}>
                                                <Pencil className="mr-2 h-4 w-4" /> Edit
                                            </DropdownMenuItem>
                                            <DropdownMenuItem onSelect={() => handleDelete(volunteer.id)} className="text-destructive">
                                                <Trash2 className="mr-2 h-4 w-4" /> Delete
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>

            {/* Add/Edit Volunteer Modal */}
            <Dialog open={isModalOpen} onOpenChange={handleCloseModal}>
                <DialogContent className="sm:max-w-[480px]">
                    <DialogHeader>
                        <DialogTitle>{editingVolunteer ? "Edit Volunteer" : "Add New Volunteer"}</DialogTitle>
                        <DialogDescription>
                            {editingVolunteer ? "Update the details for this volunteer." : "Fill in the details for the new volunteer."}
                        </DialogDescription>
                    </DialogHeader>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 py-4">
                            <div className="flex items-center space-x-4">
                                <Avatar className="h-20 w-20">
                                    <AvatarImage src={avatarPreview || 'https://placehold.co/100x100'} alt="Avatar preview" />
                                    <AvatarFallback><UserRound className="h-8 w-8"/></AvatarFallback>
                                </Avatar>
                                <FormField
                                    control={form.control}
                                    name="avatarFile"
                                    render={({ field }) => (
                                        <FormItem className="flex-1">
                                            <FormLabel>Profile Picture</FormLabel>
                                            <FormControl>
                                                <Input type="file" accept="image/*" 
                                                 onChange={(e) => {
                                                    field.onChange(e.target.files);
                                                    if (e.target.files && e.target.files[0]) {
                                                        setAvatarPreview(URL.createObjectURL(e.target.files[0]));
                                                    }
                                                }}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Full Name</FormLabel>
                                        <FormControl>
                                            <div className="relative">
                                                <UserRound className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                                <Input placeholder="e.g. John Doe" {...field} className="pl-10" />
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                             <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email Address</FormLabel>
                                        <FormControl>
                                            <div className="relative">
                                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                                <Input placeholder="e.g. volunteer@example.com" {...field} className="pl-10" />
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="role"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Role</FormLabel>
                                        <FormControl>
                                             <div className="relative">
                                                <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                                <Input placeholder="e.g. Mentor" {...field} className="pl-10" />
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <DialogFooter>
                                <Button type="button" variant="outline" onClick={handleCloseModal} disabled={isLoading}>
                                    Cancel
                                </Button>
                                <Button type="submit" disabled={isLoading}>
                                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                                    {editingVolunteer ? "Save Changes" : "Create Volunteer"}
                                </Button>
                            </DialogFooter>
                        </form>
                    </Form>
                </DialogContent>
            </Dialog>

            {/* Delete Confirmation Dialog */}
            <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete the volunteer's record from the system.
                    </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                    <AlertDialogCancel disabled={isLoading}>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={confirmDelete} disabled={isLoading} className="bg-destructive hover:bg-destructive/90">
                        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                        Yes, delete
                    </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </Card>
    );
}
