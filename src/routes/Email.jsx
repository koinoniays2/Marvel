import { useForm } from "react-hook-form";
import Layout from "../components/Layout";
import Layout7 from "../components/Layout7";
import { useMutation } from "react-query";
import { apiPostGoogleMail } from "../api";

export default function Email() {
    const { register, handleSubmit, formState: {errors}, reset } = useForm({mode: "onChange"}); //mode:"onChange" 경고 바로 반영
    // GET - useQuery(쿼리키, 쿼리function), POST - useMutation(쿼리function)
    const { mutate, data, isLoading } = useMutation(apiPostGoogleMail, { // data: 서버에서 보내준 데이터, isLoading:전송중, 전송하기 버튼설정
        onSuccess: () => { // 성공했을때 서버에서 주는 데이터
            // console.log(data?.result);
            if(data.result === "success") {// "성공했을때" 홈페이지 이동이나 form데이터안의 값들을 초기화할때
                reset(); // 폼 인풋 데이터 리셋
            }
        }
    });
    // 폼이 제출될 때 실행 할 함수
    const ouSubmit = (formData) => {
        mutate(formData); //mutate 데이터를 서버로 전송, formData 데이터가 apiPostGoogleMail 함수로 전달되어 서버로 API 요청을 수행
        // console.log(formData);
    };

    return (
    <Layout>
        <Layout7>
            <div className="py-16">
                <h2>Email Me</h2>
                {/* handleSubmit(onSubmit)은 폼이 제출될 때 onSubmit 함수가 실행되도록 설정 onSubmit 함수에는 폼에서 수집된 데이터가 전달 */}
                <form onSubmit={handleSubmit(ouSubmit)} className="flex flex-col space-y-8">
                    <div className="flex flex-col space-y-2">
                        {/* register: input의 폼 요소들을 React Hook Form과 연결하기 위해 사용
                        유효성 검사(validation) 및 다양한 기능을 쉽게 수행 required: "메세지" 필수사항 오류처리 */}
                        {/* ...register register 함수가 반환하는 속성들을 입력 요소에 추가함으로써 해당 입력 요소를 React Hook Form에 등록 */}
                        <input {...register("name", 
                        { required: "이름 필수 입력", 
                        minLength: {value:2, message: "최소 2글자 이상"},
                        maxLength: {value:5, message: "최대 5글자"}
                        })} 
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
                    <button className={`${isLoading ? 'bg-gray-500' : 'bg-red-500'} text-white px-4 py-2 rounded`} type="submit"
                    disabled={isLoading}>
                        {isLoading ? "전송중..." : "전송하기"}
                    </button>
                </form>
            </div>
        </Layout7>
    </Layout>
  )
}