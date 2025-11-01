import {motion} from "framer-motion";

const Pagetransition=({children})=>{
    return(
        <motion.div initial={{opacity:0,y:50}} animate={{opacity:1,y:0}} exit={{duration:0.6,ease:"easeOut"}}  >
            {children}
        </motion.div>
    )
}
export default Pagetransition;