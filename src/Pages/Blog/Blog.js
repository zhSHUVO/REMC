import React from "react";
import Code from "./Code";

const Blog = () => {
    return (
        <div>
            <h1 className="text-center text-3xl mb-5">Q&A</h1>
            <div className="flex justify-center items-center">
                <div className="w-3/4  mb-5">
                    <div className="mockup-window border border-base-300">
                        <div className="flex flex-col items-center px-10 py-7 bg-base-200">
                            <p className="text-lg font-bold">
                                How will you improve the performance of a React
                                Application?
                            </p>
                            <p>
                                Normally, react uses some technologies in the
                                background to make things perform better.
                                However, we can improve more by using some
                                techniques of our own. Link making different
                                components, lazy loading images, carefully
                                render components etc...
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center">
                <div className="w-3/4  mb-5">
                    <div className="mockup-window border border-base-300">
                        <div className="flex flex-col items-center px-10 py-7 bg-base-200">
                            <p className="text-lg font-bold">
                                What are the different ways to manage a state in
                                a React application?
                            </p>
                            <p>
                                React uses observable object. There are four
                                different ways to manage a state in a React
                                application. Those are "Local State", "Global
                                State", "Server State" and "URL State".
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center">
                <div className="w-3/4  mb-5">
                    <div className="mockup-window border border-base-300">
                        <div className="flex flex-col items-center px-10 py-7 bg-base-200">
                            <p className="text-lg font-bold">
                                How will you improve the performance of a React
                                Application?
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Voluptas pariatur odit
                                adipisci ipsum perspiciatis facilis porro
                                inventore vel quam similique doloremque nulla
                                illo quas in nesciunt necessitatibus, nobis
                                accusantium consectetur!
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center">
                <div className="w-3/4  mb-5">
                    <div className="mockup-window border border-base-300">
                        <div className="flex flex-col items-center px-10 py-7 bg-base-200">
                            <p className="text-lg font-bold">
                                How does prototypical inheritance work?
                            </p>
                            <p>
                                Prototypical inheritance helps us to reuse the
                                properties of methods from one to another js
                                object.It is feature to add methods and
                                properties in object. In order to get and set
                                the Prototype of an object, we use Object.
                                getPrototypeOf and Object
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center">
                <div className="w-3/4  mb-5">
                    <div className="mockup-window border border-base-300">
                        <div className="flex flex-col items-center px-10 py-7 bg-base-200">
                            <p className="text-lg font-bold">
                                Why you do not set the state directly in React.
                                For example, if you have const [products,
                                setProducts] = useState([]). Why you do not set
                                products = [...] instead, you use the
                                setProducts?
                            </p>
                            <p>
                                setProducts is very important because whan data
                                flows from top to bottom in a react component,
                                all the process store in flow state and render
                                accordingly. If we use products, that will place
                                the state in top of all and will cause an
                                infinite loop, which will break the application.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center">
                <div className="w-3/4  mb-5">
                    <div className="mockup-window border border-base-300">
                        <div className="flex flex-col items-center px-10 py-7 bg-base-200">
                            <p className="text-lg font-bold">
                                What is a unit test? Why should write unit
                                tests?
                            </p>
                            <p>
                                After completing an application programmers
                                refactor the code and make sure everything is
                                working properly. Unit testing allows to do
                                that. The procedure is to write test cases for
                                all functions and methods so that whenever a
                                change causes a fault, it can be quickly
                                identified and fixed.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center">
                <div className="w-3/4 mb-5">
                    <Code></Code>
                </div>
            </div>
        </div>
    );
};

export default Blog;
