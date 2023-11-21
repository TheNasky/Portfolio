import Image from "next/image";

export const icons = [
   {
      name: "NextJs",
      component: ({ size = 25 }) => (
         <div className="relative inline-block group">
            <Image
               src="/images/icons/NextJs.webp"
               alt="NextJs Logo"
               className=""
               width={size}
               height={size}
            />
         </div>
      ),
   },
   {
      name: "NextJs2",
      component: ({ size = 25 }) => (
         <div className="relative inline-block group">
            <Image
               src="/images/icons/NextJs2.webp"
               alt="NextJs2 Logo"
               className=""
               width={size}
               height={size}
            />
         </div>
      ),
   },
   {
      name: "ReactJs",
      component: ({ size = 25 }) => (
         <div className="relative inline-block group">
            <Image
               src="/images/icons/ReactJs.webp"
               alt="ReactJs Logo"
               className=""
               width={size}
               height={size}
            />
         </div>
      ),
   },
   {
      name: "Tailwind",
      component: ({ size = 25 }) => (
         <div className="relative inline-block group">
            <Image
               src="/images/icons/Tailwind.webp"
               alt="Tailwind Logo"
               className=""
               width={size}
               height={size}
            />
         </div>
      ),
   },
   {
      name: "NestJs",
      component: ({ size = 25 }) => (
         <div className="relative inline-block group">
            <Image
               src="/images/icons/NestJs.webp"
               alt="NestJs Logo"
               className=""
               width={size}
               height={size}
            />
         </div>
      ),
   },
   {
      name: "ExpressJs",
      component: ({ size = 25 }) => (
         <div className="relative inline-block group">
            <Image
               src="/images/icons/ExpressJs.webp"
               alt="ExpressJs Logo"
               className=""
               width={size}
               height={size}
            />
         </div>
      ),
   },
   {
      name: "NodeJs",
      component: ({ size = 25 }) => (
         <div className="relative inline-block group">
            <Image
               src="/images/icons/NodeJs.webp"
               alt="NodeJs Logo"
               className=""
               width={size}
               height={size}
            />
         </div>
      ),
   },
   {
      name: "JavaScript",
      component: ({ size = 25 }) => (
         <div className="relative inline-block group">
            <Image
               src="/images/icons/JavaScript.webp"
               alt="JavaScript Logo"
               className=""
               width={size}
               height={size}
            />
         </div>
      ),
   },
   {
      name: "TypeScript",
      component: ({ size = 25 }) => (
         <div className="relative inline-block group">
            <Image
               src="/images/icons/TypeScript.webp"
               alt="TypeScript Logo"
               className=""
               width={size}
               height={size}
            />
         </div>
      ),
   },
   {
      name: "Firebase",
      component: ({ size = 25 }) => (
         <div className="relative inline-block group">
            <Image
               src="/images/icons/Firebase.webp"
               alt="Firebase Logo"
               className=""
               width={size}
               height={size}
            />
         </div>
      ),
   },
   {
      name: "MongoDB",
      component: ({ size = 25 }) => (
         <div className="relative inline-block group">
            <Image
               src="/images/icons/MongoDB.webp"
               alt="MongoDB Logo"
               className=""
               width={size}
               height={size}
            />
         </div>
      ),
   },
   {
      name: "Docker",
      component: ({ size = 25 }) => (
         <div className="relative inline-block group">
            <Image
               src="/images/icons/Docker.webp"
               alt="Docker Logo"
               className=""
               width={size}
               height={size}
            />
         </div>
      ),
   },
   {
      name: "Kubernetes",
      component: ({ size = 25 }) => (
         <div className="relative inline-block group">
            <Image
               src="/images/icons/Kubernetes.webp"
               alt="Kubernetes Logo"
               className=""
               width={size}
               height={size}
            />
         </div>
      ),
   },
   {
      name: "HTML5",
      component: ({ size = 25 }) => (
         <div className="relative inline-block group">
            <Image
               src="/images/icons/HTML5.webp"
               alt="HTML5 Logo"
               className=""
               width={size}
               height={size}
            />
         </div>
      ),
   },
   {
      name: "CSS",
      component: ({ size = 25 }) => (
         <div className="relative inline-block group">
            <Image
               src="/images/icons/CSS.webp"
               alt="CSS Logo"
               className=""
               width={size}
               height={size}
            />
         </div>
      ),
   },
   {
      name: "SASS",
      component: ({ size = 25 }) => (
         <div className="relative inline-block group">
            <Image
               src="/images/icons/SASS.webp"
               alt="SASS Logo"
               className=""
               width={size}
               height={size}
            />
         </div>
      ),
   },
   {
      name: "Bootstrap",
      component: ({ size = 25 }) => (
         <div className="relative inline-block group">
            <Image
               src="/images/icons/Bootstrap.webp"
               alt="Bootstrap Logo"
               className=""
               width={size}
               height={size}
            />
         </div>
      ),
   },
   {
      name: "Github",
      component: ({ size = 25 }) => (
         <div className="relative inline-block group">
            <Image
               src="/images/icons/Github.webp"
               alt="Github Logo"
               className=""
               width={size}
               height={size}
            />
         </div>
      ),
   },
   {
      name: "Linkedin",
      component: ({ size = 25 }) => (
         <div className="relative inline-block group">
            <Image
               src="/images/icons/Linkedin.webp"
               alt="Linkedin Logo"
               className=""
               width={size}
               height={size}
            />
         </div>
      ),
   },
   {
      name: "Whatsapp",
      component: ({ size = 25 }) => (
         <div className="relative inline-block group">
            <Image
               src="/images/icons/Whatsapp.webp"
               alt="Whatsapp Logo"
               className=""
               width={size}
               height={size}
            />
         </div>
      ),
   },
];

export const getIcon = (name, { size = 25 } = {}) => {
   const icon = icons.find((icon) => icon.name === name);

   if (icon) {
      return icon.component({ size });
   } else {
      return <div></div>;
   }
};

export const getIconTt = (name, { size = 25 } = {}) => {
   const icon = icons.find((icon) => icon.name === name);

   if (icon) {
      return (
         <div className="relative inline-block group">
            {icon.component({ size })}
            <div className="tooltip hidden group-hover:block bg-gray-800 text-white text-m py-1 px-1 rounded absolute left-1/2 transform -translate-x-1/2 transition-opacity duration-300">
               {icon.name}
            </div>
         </div>
      );
   } else {
      return <div></div>;
   }
};
