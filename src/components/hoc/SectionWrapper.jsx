import { motion } from "framer-motion";
// التعديل هنا: رجعنا خطوتين لورا (../../) عشان نوصل لملف motion صح
import { staggerContainer } from "../../utils/motion";

const SectionWrapper = (Component, idName) =>
    function HOC() {
        return (
            <motion.section
                variants={staggerContainer()}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.25 }}
                className={`sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0`}
                // التعديل السحري: نقلنا الـ id للسكشن الرئيسي
                id={idName}
            >
                <Component />
            </motion.section>
        );
    };

export default SectionWrapper;