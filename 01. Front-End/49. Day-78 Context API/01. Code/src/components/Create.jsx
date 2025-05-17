
import { nanoid } from "nanoid";
import {useForm} from "react-hook-form"
import {toast} from "react-toastify"

const Create = (props) => {
  const settodos = props.settodos;
  const todos = props.todos;

  const {
    register, 
    handleSubmit, 
    reset, 
    formState: {errors} , 
  }= useForm()

  const submitHandler = (data) => {
    // console.log(data);
    data.isCompleted = false,
    data.id = nanoid()
    settodos([...todos, data])

    toast.success("Todo Created")

    reset()
  };

  // console.log(errors);

  return (
    <div className=" w-[50%] p-10 flex flex-col ">

      <h1 className="mb-10 text-4xl text-white font-thin">
        Set <span className="text-red-400">Reminder</span> for <br /> tasks
      </h1>

      <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col">

        <input
        {...register("title", {required: "title can not be empty"})}
          className="p-2 border-b w-full text-2xl font-thin outline-0"
         
          type="text"
          placeholder="title"
        />

       {/* { errors && errors.title ? <small>{errors.title.message}</small> : null} */}
       <small className="text-thin text-red-400">{errors?.title?.message}</small>
       {/* { errors && errors.title && errors.title.message && <small>{errors.title.message }</small>} */}

        <br /> <br />

        <button className="text-xl border py-2 w-[12rem] cursor-pointer rounded">
          Create Todo
        </button>

      </form>

    </div>
  );
};

export default Create;
