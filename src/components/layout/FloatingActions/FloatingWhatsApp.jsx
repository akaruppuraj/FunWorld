import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";

function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/919629109053"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with SNM Fun World on WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-[100] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_35px_rgba(0,0,0,0.25)]"
    >
      <MessageCircle size={23} />
    </motion.a>
  );
}

export default FloatingWhatsApp;