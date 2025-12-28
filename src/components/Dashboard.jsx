import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  UserCircle, 
  BookOpen, 
  Users, 
  Calendar, 
  Settings, 
  LogOut, 
  Bell, 
  Search,
  CheckCircle,
  Clock,
  FileText,
  TrendingUp
} from "lucide-react";

const Dashboard = ({ userRole = "Student" }) => { 
  const [activeTab, setActiveTab] = useState("Overview");
const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/"); 
  };
  const roleConfig = {
    HOD: {
      metrics: [
        { label: "Total Faculty", value: "24", icon: <Users />, color: "bg-blue-500" },
        { label: "Dept. Budget", value: "$12k", icon: <TrendingUp />, color: "bg-emerald-500" },
        { label: "Student Strength", value: "450", icon: <UserCircle />, color: "bg-purple-500" },
        { label: "Pending Approvals", value: "8", icon: <Clock />, color: "bg-amber-500" },
      ],
      actions: ["Manage Faculty", "Department Reports", "Curriculum Planning"]
    },
    Teacher: {
      metrics: [
        { label: "Active Classes", value: "4", icon: <BookOpen />, color: "bg-indigo-500" },
        { label: "Assignments to Grade", value: "28", icon: <FileText />, color: "bg-pink-500" },
        { label: "Avg. Attendance", value: "92%", icon: <CheckCircle />, color: "bg-teal-500" },
        { label: "Next Lecture", value: "2:00 PM", icon: <Clock />, color: "bg-orange-500" },
      ],
      actions: ["Mark Attendance", "Upload Materials", "Post Assignment"]
    },
    Student: {
      metrics: [
        { label: "Course Progress", value: "78%", icon: <TrendingUp />, color: "bg-blue-600" },
        { label: "Attendance", value: "85%", icon: <CheckCircle />, color: "bg-green-600" },
        { label: "Upcoming Exams", value: "2", icon: <Calendar />, color: "bg-red-500" },
        { label: "Pending Tasks", value: "5", icon: <Clock />, color: "bg-yellow-500" },
      ],
      actions: ["View Schedule", "Download Notes", "Join Lecture"]
    }
  };

  const currentConfig = roleConfig[userRole] || roleConfig.Student;

  return (
    <div className="flex h-screen bg-slate-50 font-sans text-slate-900 overflow-hidden">
      
      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col hidden md:flex">
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
            <LayoutDashboard size={20} />
          </div>
          <span className="text-xl font-bold tracking-tight">EduPortal</span>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          {["Overview", "Courses", "Schedule", "Messages", "Settings"].map((item) => (
            <button
              key={item}
              onClick={() => setActiveTab(item)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all ${
                activeTab === item 
                ? "bg-blue-50 text-blue-600 shadow-sm shadow-blue-100" 
                : "text-slate-500 hover:bg-slate-50 hover:text-slate-700"
              }`}
            >
              {item === "Overview" && <LayoutDashboard size={18}/>}
              {item === "Courses" && <BookOpen size={18}/>}
              {item === "Schedule" && <Calendar size={18}/>}
              {item === "Messages" && <Bell size={18}/>}
              {item === "Settings" && <Settings size={18}/>}
              {item}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-100">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-red-500 font-bold hover:bg-red-50 rounded-xl transition-all" onClick={handleLogout}>
            <LogOut size={18} /> Logout
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        
        {/* TOPBAR */}
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10">
          <div className="relative w-96 group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="Search data, students, or resources..." 
              className="w-full pl-10 pr-4 py-2 bg-slate-100 rounded-xl border-none focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
            />
          </div>

          <div className="flex items-center gap-6">
            <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-all">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-3 pl-6 border-l border-slate-200">
              <div className="text-right">
                <p className="text-sm font-bold text-slate-900 leading-tight">Alex Harrison</p>
                <p className="text-[10px] font-bold uppercase text-blue-600 tracking-wider">{userRole}</p>
              </div>
              <div className="w-10 h-10 bg-slate-200 rounded-full border-2 border-white shadow-sm overflow-hidden">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" />
              </div>
            </div>
          </div>
        </header>

        {/* DASHBOARD CONTENT */}
        <div className="p-8 max-w-7xl mx-auto w-full">
          
          {/* Welcome Section */}
          <div className="mb-10">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Welcome back, Alex! 👋
            </h2>
            <p className="text-slate-500 mt-1 font-medium">Here's what is happening in your {userRole === 'Student' ? 'studies' : 'department'} today.</p>
          </div>

          {/* Metric Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {currentConfig.metrics.map((metric, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                key={i}
                className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all group"
              >
                <div className={`w-12 h-12 ${metric.color} text-white rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-inherit/20 group-hover:scale-110 transition-transform`}>
                  {React.cloneElement(metric.icon, { size: 24 })}
                </div>
                <p className="text-slate-500 text-sm font-bold">{metric.label}</p>
                <p className="text-2xl font-black text-slate-900 mt-1">{metric.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Bottom Grid: Activity & Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Recent Activity Table (Left) */}
            <div className="lg:col-span-2 bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Recent Updates</h3>
                <button className="text-blue-600 text-sm font-bold hover:underline">View All</button>
              </div>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-transparent hover:border-blue-100 hover:bg-white transition-all group cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-sm">
                        <FileText size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-800">New Syllabus Updated</p>
                        <p className="text-xs text-slate-400 font-medium">Updated 2 hours ago • By Admin</p>
                      </div>
                    </div>
                    <ChevronRight size={18} className="text-slate-300 group-hover:text-blue-500 transition-colors" />
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions (Right) */}
            <div className="bg-slate-900 text-white rounded-[2.5rem] p-8 shadow-xl shadow-slate-200">
              <h3 className="text-xl font-bold mb-6">Quick Actions</h3>
              <div className="space-y-3">
                {currentConfig.actions.map((action, i) => (
                  <button 
                    key={i} 
                    className="w-full py-4 px-6 bg-white/10 hover:bg-white/20 rounded-2xl font-bold flex items-center justify-between transition-all group"
                  >
                    {action}
                    <ArrowRight size={18} className="text-white/40 group-hover:translate-x-1 transition-transform" />
                  </button>
                ))}
              </div>
              
              {/* Promo Widget */}
              <div className="mt-10 p-6 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl relative overflow-hidden">
                <div className="relative z-10">
                  <p className="text-xs font-bold text-blue-100 uppercase tracking-widest mb-1">Upcoming</p>
                  <p className="text-lg font-bold leading-tight">Faculty Meeting<br/>Dec 30, 2024</p>
                </div>
                <Users size={60} className="absolute -bottom-2 -right-2 text-white/10 rotate-12" />
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

// Helper Icon components (standard lucide replacements)
const ChevronRight = ({ size, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m9 18 6-6-6-6"/></svg>
);
const ArrowRight = ({ size, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);

export default Dashboard;