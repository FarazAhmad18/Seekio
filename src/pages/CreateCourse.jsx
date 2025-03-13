import React, { useState, useRef } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Underline from "@tiptap/extension-underline";
import TextStyle from "@tiptap/extension-text-style";
import { UploadCloud, Bold as BoldIcon, Italic as ItalicIcon, Underline as UnderlineIcon } from "lucide-react";

const CourseSchema = Yup.object().shape({
  moduleName: Yup.string().required("Module Name is required"),
  content: Yup.string().required("Content is required"),
});

const CreateCourse = () => {
  const [content, setContent] = useState("");
  const [mediaFile, setMediaFile] = useState(null);
  const fileInputRef = useRef(null);

  const editor = useEditor({
    extensions: [StarterKit, Bold, Italic, Underline, TextStyle],
    content: "",
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
  });

  const handleMediaUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setMediaFile(file);
    }
  };

  return (
    <div className="pt-20 w-full min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 px-4 md:px-16 py-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-800 mb-4">Create Course</h2>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        This will allow you to build your course, upload materials, and publish it to reach your students. Whether you're teaching a technical skill, a creative art, or anything in between, our platform makes it simple and intuitive to design and launch your course.
      </p>

      {/* Step Indicator */}
      <div className="flex justify-center gap-4 mb-10 text-sm md:text-base">
        <div className="flex items-center gap-2 text-blue-700 font-semibold">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full">1</span> Course Information
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <span className="border border-gray-400 px-3 py-1 rounded-full">2</span> Course Content
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <span className="border border-gray-400 px-3 py-1 rounded-full">3</span> Pricing
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <span className="border border-gray-400 px-3 py-1 rounded-full">4</span> Publish
        </div>
      </div>

      {/* Form */}
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 max-w-4xl mx-auto">
        <Formik
          initialValues={{ moduleName: "", content: "" }}
          validationSchema={CourseSchema}
          onSubmit={(values) => {
            values.content = content;
            console.log("Form Submitted:", values);
            console.log("Uploaded Media:", mediaFile);
          }}
        >
          {({ errors, touched }) => (
            <Form className="grid md:grid-cols-2 gap-6">
              {/* Module Name */}
              <div className="col-span-2 md:col-span-1">
                <label className="block font-medium text-gray-700 mb-2">Module Name</label>
                <Field
                  name="moduleName"
                  placeholder="Module 1"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {errors.moduleName && touched.moduleName && (
                  <div className="text-red-500 text-sm mt-1">{errors.moduleName}</div>
                )}
              </div>

              {/* Course Media */}
              <div className="col-span-2 md:col-span-1">
                <label className="block font-medium text-gray-700 mb-2">Course Media</label>
                <div
                  className="w-full h-40 border border-dashed border-gray-400 rounded-md flex flex-col gap-2 items-center justify-center text-gray-500 cursor-pointer hover:bg-gray-100"
                  onClick={() => fileInputRef.current.click()}
                >
                  <UploadCloud className="w-8 h-8" />
                  {mediaFile ? mediaFile.name : "Click to upload media"}
                </div>
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  onChange={handleMediaUpload}
                />
              </div>

              {/* Course Content */}
              <div className="col-span-2">
                <label className="block font-medium text-gray-700 mb-2">Content</label>

                {/* Editor Toolbar */}
                <div className="flex gap-2 mb-2">
                  <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className="p-2 border rounded hover:bg-blue-100"
                  >
                    <BoldIcon className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className="p-2 border rounded hover:bg-blue-100"
                  >
                    <ItalicIcon className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleUnderline().run()}
                    className="p-2 border rounded hover:bg-blue-100"
                  >
                    <UnderlineIcon className="w-4 h-4" />
                  </button>
                </div>

                <div className="border border-gray-300 rounded-md p-2 min-h-[150px] bg-white">
                  <EditorContent editor={editor} />
                </div>
                {errors.content && touched.content && (
                  <div className="text-red-500 text-sm mt-1">{errors.content}</div>
                )}
              </div>

              <div className="col-span-2 text-end">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md"
                >
                  Next
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CreateCourse;
