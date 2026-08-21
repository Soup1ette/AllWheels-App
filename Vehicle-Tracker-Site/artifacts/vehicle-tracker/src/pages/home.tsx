import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Droplet, TrendingUp, Car, Bell, Wrench, 
  Receipt, ArrowRight, CheckCircle2, Download,
  Camera, ImageIcon, PenLine, FileDown
} from 'lucide-react';
import { Link } from 'wouter';

import logoSrc from '@assets/AW_app_logo_1785844987626.png';
import dashboardImg from '@assets/generated_images/dashboard-ui_2.jpg';
import cleanVehicleImg from '@assets/generated_images/clean-vehicle_3.jpg';
import fuelStatsImg from '@assets/generated_images/fuel-stats_2.jpg';
import betaQrImg from '@assets/generated_images/allwheels-beta-qr.png';

const BETA_URL = 'https://all-wheels-mobile--AllWheels.replit.app';

function scrollToBeta(e: React.MouseEvent) {
  e.preventDefault();
  document.getElementById('beta')?.scrollIntoView({ behavior: 'smooth' });
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 20 }
  }
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 0.2], [0, 100]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  useEffect(() => {
    document.title = "AllWheels | Your Vehicle's Personal Logbook";
  }, []);

  return (
    <div className="bg-background min-h-screen text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary">
      
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoSrc} alt="AllWheels Logo" className="w-10 h-10 object-contain" />
            <span className="font-display font-semibold text-xl tracking-wide">AllWheels</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#maintenance" className="hover:text-primary transition-colors">Maintenance</a>
            <a href="#fuel" className="hover:text-primary transition-colors">Fuel Tracking</a>
            <a href="#gallery" className="hover:text-primary transition-colors">Gallery</a>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={scrollToBeta} className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-all shadow-[0_4px_14px_rgba(59,127,235,0.4)]">
              Get the App
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 md:pt-48 md:pb-32 px-6 max-w-6xl mx-auto">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -z-10 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            style={{ y: yHero, opacity: opacityHero }}
            className="w-full lg:w-1/2 z-10"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Your vehicle's personal logbook
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-[1.05] mb-6">
              Stop guessing. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">Start tracking.</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed">
              Take complete control of your car, truck, or motorcycle. Log fuel costs, track mileage, and never miss an oil change again with beautifully organized maintenance reminders.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <button onClick={scrollToBeta} className="group relative inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-[0_8px_30px_rgba(59,127,235,0.3)]">
                <Download className="w-5 h-5" />
                Download AllWheels
              </button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl ring-1 ring-white/5 aspect-[4/3] group">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
              <img src={cleanVehicleImg} alt="Sleek vehicle" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            
            {/* Floating stat card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-8 -left-8 bg-card/90 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-xl z-20 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Bell className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium">Oil Change Due</p>
                <p className="font-display font-bold text-lg">In 450 miles</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Multiple Vehicles */}
      <section id="features" className="py-24 px-6 relative border-t border-white/5 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Your entire garage in your pocket.</h2>
            <p className="text-lg text-muted-foreground">Manage any number of vehicles. Give each one a profile, track its specific needs, and easily switch between your daily driver and your weekend ride.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Car, title: 'Cars & Trucks', desc: 'From commuters to heavy-duty trucks, keep their histories distinct.' },
              { icon: Wrench, title: 'Motorcycles', desc: 'Track chain maintenance, tire pressure, and seasonal prep.' },
              { icon: Receipt, title: 'Receipts & Docs', desc: 'Snap a photo of the service receipt and save it directly to the vehicle record.' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fuel Logger */}
      <section id="fuel" className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(59,127,235,0.15)] group"
            >
              <img src={fuelStatsImg} alt="Fuel Stats Visualization" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
            </motion.div>
          </div>
          
          <div className="w-full md:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-4">
                <Droplet className="w-4 h-4" /> FUEL LOGGER
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">See where your <br/>money goes.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Log every fill-up in seconds. AllWheels automatically calculates your real-world fuel efficiency (MPG or L/100km) and visualizes your monthly fuel costs so you can spot trends instantly.
              </p>

              <ul className="space-y-5">
                {[
                  'Calculate exact MPG or L/100km per tank',
                  'Track total fuel expenditure over time',
                  'Monitor fluctuations in efficiency to catch engine issues'
                ].map((text, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <span className="text-foreground">{text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Maintenance Reminders */}
      <section id="maintenance" className="py-24 px-6 relative bg-secondary/30 border-y border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-4">
                <Wrench className="w-4 h-4" /> SMART MAINTENANCE
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Never miss an <br/>oil change.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Set up recurring maintenance items by distance or date. We'll let you know when it's time for an inspection, tire rotation, or oil change.
              </p>

              <div className="space-y-4">
                {[
                  { title: 'Custom Maintenance Items', desc: 'Add anything your specific vehicle needs.' },
                  { title: 'Predictive Alerts', desc: 'Get warned before an item becomes overdue.' },
                  { title: 'Detailed Service Notes', desc: 'Keep track of what oil weight or filter you used last time.' }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-background/50 border border-white/5 p-5 rounded-xl hover:border-white/10 transition-colors"
                  >
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full max-w-sm"
            >
              {/* Phone Mockup Frame */}
              <div className="relative rounded-[2.5rem] overflow-hidden border-[6px] border-white/10 shadow-2xl bg-card">
                <div className="absolute top-0 inset-x-0 h-6 bg-background/80 z-20 flex justify-center">
                   <div className="w-24 h-4 bg-black rounded-b-xl"></div>
                </div>
                <img src={dashboardImg} alt="AllWheels App Interface" className="w-full h-auto object-cover relative z-10 opacity-90 hover:opacity-100 transition-opacity" />
              </div>
              
              {/* Decorative blobs */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 blur-[80px] -z-10 rounded-full"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery & Customization */}
      <section id="gallery" className="py-24 px-6 relative border-t border-white/5 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-4">
              <Camera className="w-4 h-4" /> MAKE IT YOURS
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">More than a spreadsheet.</h2>
            <p className="text-lg text-muted-foreground">Every vehicle in your garage gets its own identity — photos, a profile picture, a name you choose, and a full history you can take with you.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: ImageIcon, title: 'Photo Gallery', desc: 'Add photos of your vehicle to build a visual history alongside its records.' },
              { icon: PenLine, title: 'Personalization', desc: 'Set a profile picture and give each vehicle a name of your choosing.' },
              { icon: FileDown, title: 'Export History', desc: 'Download your full maintenance history anytime — handy for resale or warranty claims.' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Beta / Final CTA */}
      <section id="beta" className="py-32 px-6 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
        
        <div className="max-w-3xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium tracking-wide mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Early beta
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold mb-8"
          >
            Ready to take the wheel?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground mb-10 leading-relaxed"
          >
            AllWheels is currently in beta. Scan the code below to try it now — no App Store or Play Store listing yet, but you can get hands-on with the real app today.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="bg-white p-5 rounded-2xl shadow-xl">
              <img src={betaQrImg} alt="Scan to try the AllWheels beta" className="w-48 h-48 md:w-56 md:h-56" />
            </div>
            <p className="text-sm text-muted-foreground">Scan with your phone's camera to try the beta</p>
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline break-all"
            >
              {BETA_URL.replace('https://', '')}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-background pt-16 pb-8 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={logoSrc} alt="AllWheels Logo" className="w-8 h-8 object-contain opacity-80" />
              <span className="font-display font-semibold text-lg tracking-wide">AllWheels</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
              The thoughtful, organized logbook for anyone who takes pride in owning a vehicle. Built for enthusiasts, designed for everyone.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Features</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#fuel" className="hover:text-primary transition-colors">Fuel Tracking</a></li>
              <li><a href="#maintenance" className="hover:text-primary transition-colors">Maintenance Reminders</a></li>
              <li><a href="#features" className="hover:text-primary transition-colors">Multi-Vehicle Support</a></li>
              <li><a href="#gallery" className="hover:text-primary transition-colors">Photo Gallery</a></li>
              <li><a href="#features" className="hover:text-primary transition-colors">Receipt Storage</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Support</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto pt-8 border-t border-white/5 text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} AllWheels App. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
