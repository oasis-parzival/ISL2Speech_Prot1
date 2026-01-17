import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, User, Lock, ArrowRight, Github, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate login
        setTimeout(() => {
            setIsLoading(false);
            navigate('/');
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-graphite-950 flex items-center justify-center relative overflow-hidden px-4">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05)_0%,transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.02)_0%,transparent_50%)]" />

            <div className="w-full max-w-md relative z-10">
                <button
                    onClick={() => navigate('/')}
                    className="mb-8 flex items-center gap-2 text-grey-400 hover:text-white transition-colors"
                >
                    <ArrowLeft size={20} />
                    Back to Home
                </button>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-graphite-900/50 backdrop-blur-xl border border-white/5 rounded-3xl p-8 shadow-2xl"
                >
                    <div className="text-center mb-10">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-silver-400 to-silver-600 flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 shadow-lg shadow-silver-500/20">
                            S
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-2">Welcome Back</h2>
                        <p className="text-grey-400 text-sm">Sign in to continue to your dashboard</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-grey-300 uppercase tracking-wider ml-1">Email</label>
                            <div className="relative group">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-grey-500 group-focus-within:text-silver-400 transition-colors" />
                                <input
                                    type="email"
                                    placeholder="name@example.com"
                                    className="w-full bg-graphite-950/50 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder:text-grey-600 focus:outline-none focus:border-silver-500/50 focus:bg-white/5 transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-grey-300 uppercase tracking-wider ml-1">Password</label>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-grey-500 group-focus-within:text-silver-400 transition-colors" />
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full bg-graphite-950/50 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder:text-grey-600 focus:outline-none focus:border-silver-500/50 focus:bg-white/5 transition-all"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-xs sm:text-sm">
                            <label className="flex items-center gap-2 cursor-pointer text-grey-400 hover:text-white transition-colors">
                                <input type="checkbox" className="rounded border-grey-600 bg-transparent" />
                                <span>Remember me</span>
                            </label>
                            <a href="#" className="text-silver-400 hover:text-silver-300 transition-colors">Forgot password?</a>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-gradient-to-r from-silver-500 to-silver-600 text-white font-semibold py-3.5 rounded-xl hover:shadow-lg hover:shadow-silver-500/10 transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    Sign In
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-8 pt-8 border-t border-white/5">
                        <p className="text-grey-500 text-xs text-center mb-6">Or continue with</p>
                        <div className="grid grid-cols-2 gap-4">
                            <button className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 rounded-xl py-2.5 transition-all group">
                                <Github className="w-5 h-5 text-white" />
                                <span className="text-sm font-medium text-grey-300 group-hover:text-white">GitHub</span>
                            </button>
                            <button className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 rounded-xl py-2.5 transition-all group">
                                <Mail className="w-5 h-5 text-white" />
                                <span className="text-sm font-medium text-grey-300 group-hover:text-white">Google</span>
                            </button>
                        </div>
                    </div>

                    <p className="mt-8 text-center text-sm text-grey-500">
                        Don't have an account?{' '}
                        <a href="#" className="text-silver-400 hover:text-silver-300 font-medium transition-colors">Sign up</a>
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Login;
