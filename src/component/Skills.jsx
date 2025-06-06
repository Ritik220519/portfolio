import React from "react";

const Skills = () => {
  return (
      <div className="mt-14 bg-base-300 px-2 md:px-8">
      <h2 className="text-center font-medium text-3xl py-4">Skills</h2>
      <h2 className="text-center font-light text-xl mb-6">
        Here are some of my skills on which I have been working on..
      </h2>
      <div className="flex flex-col lg:flex-row justify-center gap-6 m-6  rounded-3xl">
        {/* Frontend */}
        <div className="card w-full max-w-md bg-base-100 card-xl shadow-sm border border-r-purple-300 shadow-purple-400 mx-auto">
          <div className="card-body">
            <h2 className="text-center font-medium text-3xl">Frontend</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="flex items-center w-full p-2 bg-emerald-900 rounded-2xl">
                <img
                  className="w-6 mx-2 rounded-md"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
                  alt="js-logo"
                />
                <span className="font-normal">Javascript</span>
              </div>
              <div className="flex items-center w-full p-2 bg-emerald-900 rounded-2xl">
                <img
                  className="w-6 mx-2 rounded-md"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
                  alt="js-logo"
                />
                <span className="font-normal">React Js</span>
              </div>
              <div className="flex items-center w-full p-2 bg-emerald-900 rounded-2xl">
                <img
                  className="w-6 mx-2 rounded-md"
                  src="https://pbs.twimg.com/profile_images/1730334391501488129/G0R0sjHH_400x400.jpg"
                  alt="tailwind-logo"
                />
                <span className="font-normal">Tailwind css</span>
              </div>
              <div className="flex items-center w-full p-2 bg-emerald-900 rounded-2xl">
                <img
                  className="w-6 mx-2 rounded-md"
                  src="https://img.daisyui.com/images/daisyui/mark-rotating.svg"
                  alt="daisyui-logo"
                />
                <span className="font-normal">Daisy UI</span>
              </div>
              <div className="flex items-center w-full p-2 bg-emerald-900 rounded-2xl col-span-full sm:col-span-1">
                <img
                  className="w-6 mx-2 rounded-md"
                  src="https://icons.getbootstrap.com/assets/img/icons-hero@2x.png"
                  alt="bootstrap-logo"
                />
                <span className="font-normal">Bootstrap</span>
              </div>
            </div>
          </div>
        </div>
        {/* Backend */}
        <div className="card w-full max-w-md bg-base-100 card-xl shadow-sm border border-r-purple-300 shadow-purple-400 mx-auto">
          <div className="card-body">
            <h2 className="text-center font-medium text-3xl">Backend</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="flex items-center w-full p-2 bg-emerald-900 rounded-2xl">
                <img
                  className="w-6 mx-2 rounded-md"
                  src="https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=png"
                  alt="node-logo"
                />
                <span className="font-normal">node Js</span>
              </div>
              <div className="flex items-center w-full p-2 bg-emerald-900 rounded-2xl">
                <img
                  className="w-6 mx-2 rounded-md"
                  src="https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png"
                  alt="express-logo"
                />
                <span className="font-normal">express Js</span>
              </div>
              <div className="flex items-center w-full p-2 bg-emerald-900 rounded-2xl col-span-full sm:col-span-1">
                <img
                  className="w-6 mx-2 rounded-md"
                  src="https://img.icons8.com/?size=160&id=8rKdRqZFLurS&format=png"
                  alt="mongodb-logo"
                />
                <span className="font-normal">mongo DB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Other */}
      <div className="flex justify-center pb-10 mb-10">
        <div className="card w-full max-w-2xl bg-base-100 card-xl shadow-sm border border-r-purple-300 shadow-purple-400">
          <div className="card-body">
            <h2 className="text-center font-medium text-3xl">Other</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              <div className="flex items-center w-full p-2 bg-emerald-900 rounded-2xl">
                <img
                  className="w-6 mx-2 rounded-md"
                  src="https://img.icons8.com/?size=100&id=38388&format=png"
                  alt="git-logo"
                />
                <span className="font-normal">git</span>
              </div>
              <div className="flex items-center w-full p-2 bg-emerald-900 rounded-2xl">
                <img
                  className="w-6 mx-2 rounded-md"
                  src="https://img.icons8.com/?size=100&id=12599&format=png"
                  alt="github-logo"
                />
                <span className="font-normal">gitHub</span>
              </div>
              <div className="flex items-center w-full p-2 bg-emerald-900 rounded-2xl">
                <img
                  className="w-6 mx-2 rounded-md"
                  src="https://img.icons8.com/?size=96&id=9OGIyU8hrxW5&format=png"
                  alt="vscode-logo"
                />
                <span className="font-normal">VS code</span>
              </div>
              <div className="flex items-center w-full p-2 bg-emerald-900 rounded-2xl">
                <img
                  className="w-6 mx-2 rounded-md"
                  src="https://img.icons8.com/?size=160&id=EPbEfEa7o8CB&format=png"
                  alt="postman-logo"
                />
                <span className="font-normal">postman</span>
              </div>
              <div className="flex items-center w-full p-2 bg-emerald-900 rounded-2xl">
                <img
                  className="w-6 mx-2 rounded-md"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAAAAABXZoBIAAAAZ0lEQVR4AWMYwkBICI/krCm45eQ/ftfCKbnp//9FuOTsfv3//98Fh+TB/0BwELtc8H8wiMMqeRUieRWbXPF/KCjGIvkYJvkYU27KfzjoxAi4jwjJ7/KY/keA1ahy3E2dSKCJm2FEAQAD1l2xzdeQ1AAAAABJRU5ErkJggg=="
                  alt="vercel-logo"
                />
                <span className="font-normal">Vercel</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
