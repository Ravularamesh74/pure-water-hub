import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Droplets, ArrowLeft, KeyRound } from 'lucide-react';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const { forgotPassword } = useAuth();
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const success = forgotPassword(email);
        if (success) {
            toast.success('Reset link sent to your email!');
            setIsSent(true);
        }
    };

    return (
        <div className="min-h-screen bg-muted/30 flex flex-col justify-center items-center p-4">
            <Link to="/login" className="absolute top-8 left-8 flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft className="h-4 w-4" /> Back to Login
            </Link>

            <div className="w-full max-w-md bg-card border border-border rounded-3xl p-10 shadow-water-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 gradient-water" />

                <div className="text-center mb-8">
                    <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4 transform hover:scale-110 transition-transform">
                        <KeyRound className="h-8 w-8" />
                    </div>
                    <h1 className="text-3xl font-bold font-heading mb-2">Forgot Password?</h1>
                    <p className="text-muted-foreground">Enter your email and we'll send a reset link</p>
                </div>

                {!isSent ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Your Email</Label>
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

                        <Button type="submit" className="w-full h-14 text-lg font-bold rounded-xl shadow-water mt-4">
                            Send Reset Link
                        </Button>
                    </form>
                ) : (
                    <div className="p-8 rounded-2xl bg-green-50 border border-green-200 text-center space-y-4">
                        <p className="text-green-800 font-medium">Check your inbox! We've sent a recovery link to </p>
                        <p className="font-bold underline text-green-700">{email}</p>
                        <Button asChild className="w-full h-12 rounded-xl mt-4">
                            <Link to="/login">Return to Login</Link>
                        </Button>
                    </div>
                )}

                <div className="mt-8 pt-6 border-t text-center">
                    <p className="text-muted-foreground text-sm">
                        Remember your password? {' '}
                        <Link to="/login" className="text-primary font-bold hover:underline">Log In</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
