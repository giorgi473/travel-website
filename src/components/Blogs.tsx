"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";
import { useRouter } from "next/navigation";

interface Blog {
  id?: number;
  img: string;
  title: {
    en: string;
    ka: string;
  };
  desc: {
    en: string;
    ka: string;
  };
  href?: string;
  blogText?: {
    en: string;
    ka: string;
  };
}

interface BlogsProps {
  blogs: Blog[];
  title?: {
    en: string;
    ka: string;
  };
  showTitle?: boolean;
}

function Blogs({ blogs, title, showTitle = true }: BlogsProps) {
  const { currentLanguage } = useLanguage();
  const router = useRouter();

  const uiTexts = {
    blogTitle: {
      ka: "გაეცანი ბლოგს",
      en: "Explore Blog",
    },
  };

  // Get display title
  const displayTitle = title
    ? title[currentLanguage]
    : uiTexts.blogTitle[currentLanguage];

  if (!blogs || !Array.isArray(blogs) || blogs.length === 0) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {showTitle && (
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-8">
            {displayTitle}
          </h2>
        )}
        <p className="text-red-500"></p>
      </div>
    );
  }

  // Filter valid blogs
  const validBlogs = blogs.filter(
    (blog) =>
      blog.title?.[currentLanguage]?.trim() &&
      blog.img?.trim() &&
      blog.desc?.[currentLanguage]?.trim()
  );

  if (validBlogs.length === 0) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {showTitle && (
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-8">
            {displayTitle}
          </h2>
        )}
        <p className="text-red-500"></p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-8 md:px-8 lg:px-10 py-8">
      {showTitle && (
        <div className="flex items-center justify-between gap-4 mb-8">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
            {displayTitle}
          </h2>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {validBlogs.map((blog, index) => (
          <Card
            key={blog.id || blog.title[currentLanguage] || index}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden p-0 h-[500px]"
          >
            <div className="relative w-full h-full">
              <Image
                src={blog.img || "/placeholder.svg"}
                alt={blog.title[currentLanguage]}
                fill
                className="object-cover hover:scale-110 cursor-pointer transition-transform duration-300 ease-in-out"
                priority={index < 3}
                onClick={() => blog.href && router.push(blog.href)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 pointer-events-none">
                <CardContent className="p-0">
                  <CardTitle
                    className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 w-60 md:w-full lg:w-80 line-clamp-2"
                    style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
                  >
                    {blog.title[currentLanguage]}
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base text-gray-200 line-clamp-2">
                    {blog.desc[currentLanguage]}
                  </CardDescription>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
