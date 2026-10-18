import {
  BadgeCheck,
  Calculator,
  ClipboardCheck,
  DoorOpen,
  DraftingCompass,
  Droplets,
  Eye,
  Flame,
  Gauge,
  Hammer,
  Handshake,
  HardHat,
  Leaf,
  MapPin,
  PenLine,
  Ruler,
  Sprout,
  Stamp,
  Store,
  Sun,
  Thermometer,
  Wind,
  Zap,
} from 'lucide-react'

// Icono de cada área de servicio (por id de categoría).
export const categoryIcons = {
  legalizacion: Stamp,
  proyectos: DraftingCompass,
  direccion: HardHat,
  'gestion-energetica': Leaf,
}

// Icono de cada servicio concreto (por id de servicio).
export const serviceIcons = {
  instalaciones: ClipboardCheck,
  actividad: Store,
  apertura: DoorOpen,
  'baja-tension': Zap,
  'obra-menor': Hammer,
  declaracion: PenLine,
  fontaneria: Droplets,
  climatizacion: Thermometer,
  ventilacion: Wind,
  electricidad: Zap,
  incendios: Flame,
  renovables: Sun,
  'direccion-facultativa': HardHat,
  mediciones: Calculator,
  eficiencia: Gauge,
  sostenibilidad: Sprout,
  certificacion: BadgeCheck,
}

// Icono de cada valor de la sección «Nosotros».
export const valueIcons = {
  rigor: Ruler,
  trato: Handshake,
  transparencia: Eye,
  local: MapPin,
}
