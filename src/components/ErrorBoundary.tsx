import React, { Component, ErrorInfo, ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught portfolio rendering error:", error, errorInfo);
  }

  private handleReload = () => {
    window.location.href = "/";
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-950 text-foreground flex items-center justify-center p-6 font-sans selection:bg-primary/30">
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-destructive/10 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-lg w-full glass border-destructive/20 rounded-2xl p-8 md:p-10 text-center space-y-6 shadow-2xl shadow-black/65">
            <div className="w-16 h-16 bg-destructive/10 border border-destructive/30 text-destructive rounded-full flex items-center justify-center mx-auto shadow-lg shadow-destructive/10 animate-pulse">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </div>

            <div className="space-y-2">
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-destructive">
                System Exception
              </h1>
              <p className="text-slate-300 text-sm leading-relaxed">
                An unexpected exception has occurred in the client runtime environment. Diagnostic dump is registered.
              </p>
            </div>

            {this.state.error && (
              <div className="bg-black/40 border border-white/5 rounded-lg p-4 text-left overflow-x-auto font-mono text-xs text-rose-300/80 max-h-32 scrollbar-hide">
                {this.state.error.toString()}
              </div>
            )}

            <Button
              variant="default"
              onClick={this.handleReload}
              className="w-full bg-destructive hover:bg-destructive/90 text-white font-semibold transition-all duration-300 rounded-lg shadow-lg shadow-destructive/20"
            >
              Restart Runtime System
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
