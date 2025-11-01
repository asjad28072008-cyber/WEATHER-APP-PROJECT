import React,{useEffect,useRef} from "react";
export default function BackgroundFX(){
    const canvasRef=useRef(null);

    useEffect(()=>{
        const cnv=canvasRef.current;
        const ctx=cnv.getContext("2d");
        let w,h,raf;
        const particles=[];
        const COUNT=70;

        const resize=()=>{
            w=cnv.width=window.innerWidth;
            h=cnv.height=window.innerHeight;
        };
        resize();
        window.addEventListener("resize",resize);

        for (let i=0;i<COUNT;i++){
            particles.push({
                x:Math.random()*w,
                y:Math.random()*h,
                r:Math.random()*1.6+0.4,
                vx:(Math.random()-0.5)*0.15,
                vy:(Math.random()-0.5)*0.15,
                a:0.15+Math.random()*0.35,

            });
        }
        const draw=()=>{
            ctx.clearRect(0,0,w,h);
            ctx.globalAlpha=0.7;
            particles.forEach(p=>{
                p.x+=p.vx;
                p.y+=p.vy;
                if (p.x<0) p.x=w;
                if (p.x>w) p.x=0;
                if (p.y<0) p.y=h;
                if (p.y>h) p.y=0;
                ctx.beginPath();
                ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
                ctx.fillStyle="rgba(255,255,255,0.8)";
                ctx.fill();
            });
            raf=requestAnimationFrame(draw);
        };
        draw();
        return()=>{
            cancelAnimationFrame(raf);
            window.removeEventListener("resize",resize);
        };
    },[]);
    return(
        <>
        <canvas ref={canvasRef} className="fixed inset-0 -z-10 pointer-events-none" style={{opacity:0.18}} />
        <div  className="fixed -z-10 inset-0  pointer-events-none" aria-hidden="true">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white/25 backdrop-blur-3xl mix-blend-overlay" style={{animation:"floatY 6s ease-in-out infinite"}} />

        <div className="absolute bottom-16 right-16 w-72 h-72 rounded-full bg-white/20 backdrop-blur-3xl mix-blend-overlay" style={{animation:"driftY 12s ease-in-out infinite"}}/>
        <div className="absolute top-1/3 right-1/3 w-96 h-96 rounded-full bg-white/10 backdrop-blur-3xl mix-blend-overlay" style={{animation:"rotateSlow 60s linear infinite"}}/>
        </div>
        </>
    );
}