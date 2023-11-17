import Image from "next/image";

export const icons = [
   {
      name: "NextJs",
      component: () => (
         <div className="relative inline-block group ">
            <Image
               src="/images/icons/NextJs.png"
               alt="NextJs Logo"
               className=""
               width={22}
               height={22}
            />
         </div>
      ),
   },
   {
      name: "ReactJs",
      component: () => (
         <div className="relative inline-block group">
            <Image
               src="/images/icons/ReactJs.png"
               alt="ReactJs Logo"
               className=""
               width={20}
               height={20}
            />
         </div>
      ),
   },
   {
      name: "Tailwind",
      component: () => (
         <div className="relative inline-block group">
            <Image
               src="/images/icons/Tailwind.png"
               alt="Tailwind Logo"
               className=""
               width={24}
               height={24}
            />
         </div>
      ),
   },
   {
      name: "NestJs",
      component: () => (
         <div className="relative inline-block group">
            <Image
               src="/images/icons/NestJs.png"
               alt="NestJs Logo"
               className=""
               width={20}
               height={20}
            />
         </div>
      ),
   },
   {
      name: "ExpressJs",
      component: () => (
         <div className="relative inline-block group">
            <Image
               src="/images/icons/ExpressJs.png"
               alt="ExpressJs Logo"
               className=""
               width={22}
               height={22}
            />
         </div>
      ),
   },
   {
      name: "NodeJs",
      component: () => (
         <div className="relative inline-block group">
            <Image
               src="/images/icons/NodeJs.png"
               alt="NodeJs Logo"
               className=""
               width={16}
               height={16}
               style={{ width: "auto", height: "auto" }}
            />
         </div>
      ),
   },
   {
      name: "JavaScript",
      component: () => (
         <div className="relative inline-block group">
            <Image
               src="/images/icons/JavaScript.png"
               alt="JavaScript Logo"
               className=""
               width={17}
               height={17}
            />
         </div>
      ),
   },
   {
      name: "TypeScript",
      component: () => (
         <div className="relative inline-block group">
            <Image
               src="/images/icons/TypeScript.png"
               alt="TypeScript Logo"
               className=""
               width={17}
               height={17}
            />
         </div>
      ),
   },
   {
      name: "Firebase",
      component: () => (
         <div className="relative inline-block group">
            <Image
               src="/images/icons/Firebase.png"
               alt="Firebase Logo"
               className=""
               width={14}
               height={14}
            />
         </div>
      ),
   },
   {
      name: "MongoDB",
      component: () => (
         <div className="relative inline-block group">
            <Image
               src="/images/icons/MongoDB.png"
               alt="MongoDB Logo"
               className=""
               width={10}
               height={17}
            />
         </div>
      ),
   },
   {
      name: "Docker",
      component: () => (
         <div className="relative inline-block group">
            <Image
               src="/images/icons/Docker.png"
               alt="Docker Logo"
               className=""
               width={22}
               height={22}
            />
         </div>
      ),
   },
   {
      name: "Kubernetes",
      component: () => (
         <div className="relative inline-block group">
            <Image
               src="/images/icons/Kubernetes.png"
               alt="Kubernetes Logo"
               className=""
               width={19}
               height={19}
            />
         </div>
      ),
   },
   {
      name: "HTML5",
      component: () => (
         <div className="relative inline-block group">
            <Image
               src="/images/icons/HTML5.png"
               alt="HTML5 Logo"
               className=""
               width={17}
               height={17}
            />
         </div>
      ),
   },
   {
      name: "CSS",
      component: () => (
         <div className="relative inline-block group">
            <Image
               src="/images/icons/CSS.png"
               alt="CSS Logo"
               className=""
               width={17}
               height={17}
            />
         </div>
      ),
   },
   {
      name: "SASS",
      component: () => (
         <div className="relative inline-block group">
            <Image
               src="/images/icons/SASS.png"
               alt="SASS Logo"
               className=""
               width={22}
               height={22}
            />
         </div>
      ),
   },
   {
      name: "Bootstrap",
      component: () => (
         <div className="relative inline-block group">
            <Image
               src="/images/icons/Bootstrap.png"
               alt="Bootstrap Logo"
               className=""
               width={17}
               height={17}
            />
         </div>
      ),
   },
];

export const getIconByName = (name) => {
   const icon = icons.find((icon) => icon.name === name);

   if (icon) {
      return icon.component;
   } else {
      // Return a default component or handle the case when the icon is not found
      return () => <div></div>;
   }
};
