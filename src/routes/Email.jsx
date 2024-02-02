import { useForm } from "react-hook-form";
import Layout from "../components/Layout";
import Layout7 from "../components/Layout7";

export default function Email() {
    const { register, handleSubmit, formState: {errors} } = useForm({mode: "onChange"}); //mode:"onChange" 경고 바로 반영
    const ouSubmit = (formData) => {
        console.log(formData);
    }
  return (
    <Layout>
        <Layout7>
            <div className="py-16">
                <h2>Email Me</h2>
                <form onSubmit={handleSubmit(ouSubmit)} className="flex flex-col space-y-8">
                    <div className="flex flex-col space-y-2">
                        <input {...register("name", 
                        { required: "이름 필수 입력", 
                        minLength: {value:2, message: "최소 2글자 이상"},
                        maxLength: {value:5, message: "최대 5글자"}
                        })} 
                        // register: input의 name속성, required: "메세지" 필수사항 오류처리
                        className="px-4 py-2 border" type="text" placeholder="name" />
                        {errors?.name && (
                            <span className="text-red-600 text-sm">
                                {errors?.name?.message}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col space-y-2">
                        <input {...register("email", {
                            required: "이메일 필수 입력",
                            pattern: {
                                value: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                message: "이메일 형식으로 입력해 주세요"
                            }
                        })}
                        className="px-4 py-2 border" type="text" placeholder="email" />
                        {errors?.email && (
                            <span className="text-red-600 text-sm">
                                {errors?.email?.message}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col space-y-2">
                        <input {...register("message", {
                            required: true,
                            minLength: {
                                value: 5,
                                message: "5글자 이상 작성"
                            }
                        })}
                        className="px-4 py-2 border" type="text" placeholder="message" />
                        {errors?.message && (
                            <span className="text-red-600 text-sm">
                                {errors?.message?.message}
                            </span>
                        )}
                    </div>
                    {/* 버튼 타입 submit */}
                    <button className="bg-red-600 text-white px-4 py-2 rounded" type="submit">전송하기</button>
                </form>
            </div>
        </Layout7>
    </Layout>
  )
}