import axios from "axios";
import { useForm } from "react-hook-form";
export const AddMeetup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>
    axios
      .post("http://localhost:8080/meetups", data)
      .then(console.log("added"));
  return (
    <div className="addMeetupContainer">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Add Meetup</h1>
        <label>title</label>
        <input
          type="text"
          className="title"
          {...register("title", { required: true })}
          required
        />
        <br />
        <label>Location</label>
        <br />
        <select
          className="location form-select w-25 mx-auto"
          {...register("location", { required: true })}
        >
          <option value=""></option>
          <option value="bangalore">Bangalore</option>
          <option value="kolkata">Kolkata</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
        </select>
        <br />
        <label>date</label>
        <input
          type="text"
          className="date"
          {...register("data", { required: true })}
          placeholder="format YYYY-MM-DD"
          required
        />
        <br />
        <label>time</label>
        <input
          type="text"
          className="time"
          {...register("time", { required: true })}
          placeholder="format HH:MM"
          required
        />
        <br />
        <label>Theme</label>
        <select
          className="theme form-select w-25 mx-auto"
          {...register("theme", { required: true })}
        >
          <option value="">-----------</option>
          <option value="technology">Technology</option>
          <option value="food">Food</option>
          <option value="movies">Movies</option>
          <option value="culture">Culture</option>
          <option value="art">Art</option>
          <option value="drama">Drama</option>
        </select>
        <label>description</label>
        <input
          type="text"
          className="description"
          {...register("description", { required: true })}
          placeholder="Description"
          required
        />
        <br />
        <label>Image</label>
        <input
          type="text"
          className="image"
          {...register("image", { required: true })}
          required
        />
        <br />
        <input className="submitMeetupForm btn btn-primary" type="submit" />
      </form>
    </div>
  );
};
