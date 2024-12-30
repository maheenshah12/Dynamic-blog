'use client'
import Header from '@/app/components/header';
import React, { useState } from "react";
import Image from "next/image";
import ingradient from "@/app/assets/cookies incredient.jpg";

// Define a type for the comments
type Comment = {
  id: number;
  text: string;
};

const Page1 = () => {
  // State for comments
  const [comments, setComments] = useState<Comment[]>([]);
  // State for comment input
  const [commentInput, setCommentInput] = useState<string>("");

  // Handle comment submission
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentInput.trim() === "") return; // Prevent empty comments

    // Add the new comment
    setComments((prevComments) => [
      ...prevComments,
      { id: Date.now(), text: commentInput },
    ]);

    // Clear the input field
    setCommentInput("");
  };

  return (
    <>
    <Header/>
   
    <div className="bg-white min-h-screen mt-9 px-4 lg:px-12">
      {/* Page Content */}
      <div>
        <h2 className="text-4xl lg:text-6xl pt-4 font-serif text-center">
          Cake Batter Chocolate Chip Cookies
        </h2>
        <h3 className="mt-3 text-center">Published: 18/12/2024</h3>
        <hr className="border-black/10 mt-4" />

        <p className="mt-4 text-lg leading-relaxed">
          <i>
            These <b>cake batter chocolate chip cookies</b> are a cross between
            soft-baked chocolate chip cookies and funfetti cake. For over a
            decade, this has remained one of the most popular cookie recipes on
            my website, and after baking a batch, you will taste why. If you
            love chocolate chip cookies and sneaking a taste of cake batter, you
            will love these fun cookies!
          </i>
        </p>

        <hr className="border-black/10 mt-6" />

        <h2 className="text-2xl lg:text-4xl pt-4 font-serif ">
          Cake Batter Cookie Dough Ingredients:
        </h2>

        <Image
          src={ingradient}
          alt="Ingredients"
          className="rounded-lg mt-6 mx-auto"
          priority={true}
        />

        <p className="mt-6 leading-relaxed">
          <i>
            The cookie dough is made from your standard cookie ingredients:
            flour, leavener, salt, sugar, butter, egg, and vanilla. What makes
            these cookies stand out in the crowded arena of cookie recipes is
            the add-ins:
          </i>
        </p>

        {/* Ingredients List */}
        {[
          {
            id: 1,
            title: "Cake Mix",
            description:
              "My team and I prefer baking from scratch, but adding dry cake mix is the SECRET to this recipe. I usually reach for vanilla cake mix, but any flavor you love works. You won’t need the whole box of cake mix, so use the leftovers another time to make a batch of cake batter rice krispie treats!",
          },
          {
            id: 2,
            title: "Chocolate Chips & White Morsels",
            description:
              "I love to use a mix of both in these cookies. Semi-sweet chocolate chips make them taste like classic chocolate chip cookies, while white chocolate morsels taste like frosting—adding to the flavor that’s reminiscent of birthday cake.",
          },
          {
            id: 3,
            title: "Sprinkles",
            description:
              "Use your favorite color sprinkles here! I used rainbow sprinkles today, but love switching them up for different holidays. You can customize these cookies with a mix of specific colors or holiday sprinkles. Have fun with them!",
          },
        ].map((item) => (
          <div
            key={item.id}
            className="flex flex-row items-start mt-6 space-x-4"
          >
            {/* Circle with number */}
            <div className=" h-3 w-4 bg-slate-200 lg:h-7 lg:w-14 rounded-full flex items-center justify-center text-center text-gray-900 font-bold">
              {item.id}
            </div>

            {/* Text Content */}
            <div>
              <p className="text-lg lg:text-xl ">
                <i>
                  <b>{item.title}:</b> {item.description}
                </i>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Comment Section */}
      <div className="mt-20">
        <h2 className="text-lg lg:text-4xl font-serif mb-4">
         <i> Leave a Comment</i>
        </h2>

        {/* Comment Form */}
        <form onSubmit={handleCommentSubmit} className="mb-8">
          <textarea
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
            placeholder="Write your comment here..."
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
          ></textarea>
          <button
            type="submit"
            className="bg-pink-900 hover:bg-pink-600 text-white px-6 py-2 mt-4 rounded-md transition"
          >
            Submit
          </button>
        </form>

        {/* Display Comments */}
        <div className="space-y-4">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="border border-gray-300 p-4 rounded-lg"
            >
              {comment.text}
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Page1;
