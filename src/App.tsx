import { SnakeGame } from './components/SnakeGame';
import { MusicPlayer } from './components/MusicPlayer';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-primary/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 15, repeat: Infinity, delay: 2 }}
          className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-secondary/20 rounded-full blur-[120px]"
        />
      </div>

      <main className="z-10 flex flex-col items-center gap-8 w-full max-w-6xl">
        <header className="text-center space-y-2">
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic"
          >
            <span className="text-primary neon-text-cyan">Neon</span>
            <span className="text-white"> Beats</span>
          </motion.h1>
          <motion.p 
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-xs md:text-sm uppercase tracking-[0.4em] font-bold"
          >
            Immersive Cyberpunk Arcade
          </motion.p>
        </header>

        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 w-full">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="w-full lg:w-auto"
          >
            <SnakeGame />
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="w-full lg:w-auto flex flex-col gap-6"
          >
            <MusicPlayer />
            
            <div className="bg-card/40 backdrop-blur-md border border-border p-6 rounded-3xl space-y-4">
              <h4 className="text-xs uppercase tracking-widest font-bold text-primary">System Status</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">Neural Link</span>
                  <span className="text-xs font-mono text-primary">STABLE</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">Audio Buffer</span>
                  <span className="text-xs font-mono text-secondary">OPTIMIZED</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">Game Engine</span>
                  <span className="text-xs font-mono text-accent">ACTIVE</span>
                </div>
              </div>
              <div className="pt-2">
                <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="h-full w-1/3 bg-gradient-to-r from-transparent via-primary to-transparent"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <footer className="mt-8 text-center">
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest opacity-50">
            &copy; 2026 NEON BEATS ARCADE • ALL SYSTEMS OPERATIONAL
          </p>
        </footer>
      </main>
    </div>
  );
}
