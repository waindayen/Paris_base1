import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  Shield, 
  Database,
  AlertTriangle,
  FileText,
  LogOut,
  Ticket,
  Trophy,
  Calendar,
  Calculator
} from 'lucide-react';

export const adminMenuItems = [
  { 
    icon: LayoutDashboard, 
    label: 'Dashboard', 
    path: '/dashboard/admin' 
  },
  { 
    icon: Users, 
    label: 'Utilisateurs', 
    path: '/dashboard/admin/users' 
  },
  { 
    icon: Shield, 
    label: 'Permissions', 
    path: '/dashboard/admin/permissions' 
  },
  { 
    icon: Ticket, 
    label: 'Lottos', 
    submenu: [
      { 
        icon: Trophy, 
        label: 'Liste des lottos', 
        path: '/dashboard/admin/lottos' 
      },
      { 
        icon: Calendar, 
        label: 'Créer un lotto', 
        path: '/dashboard/admin/setup-lotto' 
      },
      { 
        icon: Trophy, 
        label: 'Lottos terminés', 
        path: '/dashboard/admin/lotto-draws' 
      },
      { 
        icon: Calculator, 
        label: 'Calcul des gains', 
        path: '/dashboard/admin/lotto-prizes' 
      }
    ]
  },
  { 
    icon: Database, 
    label: 'Base de données', 
    path: '/dashboard/admin/database' 
  },
  { 
    icon: AlertTriangle, 
    label: 'Alertes', 
    path: '/dashboard/admin/alerts' 
  },
  { 
    icon: FileText, 
    label: 'Logs', 
    path: '/dashboard/admin/logs' 
  },
  { 
    icon: Settings, 
    label: 'Configuration', 
    path: '/dashboard/admin/site-config' 
  }
];