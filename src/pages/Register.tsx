import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Droplets, ArrowLeft, UserPlus } from 'lucide-react';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { register } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const success = register(email, password, name);

        if (success) {
            toast.success('Account created successfully!');
            navigate('/portal/order');
        } else {
            toast.error('Registration failed. Please try again.');
        }
    };

    return (
        <div className="min-h-screen bg-muted/30 flex flex-col justify-center items-center p-4">
            <Link to="/" className="absolute top-8 left-8 flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>

            <div className="w-full max-w-md bg-card border border-border rounded-3xl p-10 shadow-water-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 gradient-water" />

                <div className="text-center mb-8">
                    <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4 transform hover:scale-110 transition-transform">
                        <UserPlus className="h-8 w-8" />
                    </div>
                    <h1 className="text-3xl font-bold font-heading mb-2">Create Account</h1>
                    <p className="text-muted-foreground">Join Shiva Ganga for easy water supply</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                            id="name"
                            placeholder="Your Name"
                            className="h-12 border-2 rounded-xl focus:border-primary transition-all"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="name@example.com"
                            className="h-12 border-2 rounded-xl focus:border-primary transition-all"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Create Password</Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="Min. 6 characters"
                            className="h-12 border-2 rounded-xl focus:border-primary transition-all"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            minLength={6}
                        />
                    </div>

                    <Button type="submit" className="w-full h-14 text-lg font-bold rounded-xl shadow-water gap-2 mt-4">
                        Register Now
                    </Button>
                </form>

                <div className="mt-8 pt-6 border-t text-center">
                    <p className="text-muted-foreground text-sm">
                        Already have an account? {' '}
                        <Link to="/login" className="text-primary font-bold hover:underline">Log In</Link>
                    </p>
                </div>

                <p className="text-center text-[10px] text-muted-foreground mt-8 uppercase tracking-widest opacity-50">
                    Secure & Reliable Service
                </p>
            </div>
        </div>
    );
};

export default Register;
