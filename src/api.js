import qs from "qs";
import xml2js from "react-native-xml2js";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://gateway.marvel.com:443/v1/public";

export async function expressTest() {
    try{
        return await fetch("http://localhost:4000")
        .then((res) => res.json());
    }catch(error) {
        console.log(error);
    }
}

export async function apiGetMunhwa() {
    try{
        let data;
        const xmlData = await fetch("http://www.cha.go.kr/cha/SearchKindOpenapiList.do")
        .then(res => res.text());
        // console.log(xmlData);
        xml2js.parseString(xmlData, (err, result) => {
            if(err !== null) {
                console.log(err);
                return // err 발생 시 아무것도 하지않음
            }
            data = result; // err발생 아닐 시 result를 data에 받기
        });
        return data; // 리턴
    }catch(error) {
        console.log(error);
    }
}
// [GET] Comics 리스트
export async function apiGetComics() {
    return await fetch(`${BASE_URL}/comics?apikey=${API_KEY}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => res.json());
}

// [GET] Events 리스트
export async function apiGetEvents({ pageParam }) {
    console.log(pageParam);
    const offset = pageParam * 10; // offset : 데이터 시작 인덱스, limit: 데이터 갯수
    return await fetch(`${BASE_URL}/events?limit=10&offset=${offset}&apikey=${API_KEY}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => res.json());
}

// [GET] Characters 리스트
export async function apiGetCharacters({queryKey}) { // MainPage에서 Feach요청 한 쿼리 키의 인자를 받아온다.
    const limit = queryKey[1].limit;
    try {
        return await fetch(`${BASE_URL}/characters?limit=${limit}&apikey=${API_KEY}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => res.json());
    }catch(error) {
        console.log(error);     
    }
}

// [GET] Characters 디테일
export async function apiGetCharacterDtail({queryKey}) { // MainPage에서 Feach요청 한 쿼리 키의 인자를 받아온다.
    const id = queryKey[1].id;
    // console.log(queryKey);
    try {
        return await fetch(`${BASE_URL}/characters/${id}?apikey=${API_KEY}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => res.json());
    }catch(error) {
        console.log(error);     
    }
}
export async function apiPostGoogleMail(data) {
    // console.log(data);
    // const formData = new FormData();
    // formData.append("name", data.name);
    // formData.append("email", data.email);
    // formData.append("message", data.message);
    try {
        // 결과값을 기다린 다음 리턴
        return await fetch("https://script.google.com/macros/s/AKfycby7O9cp1nlcG7ABIEYIn0vAIm1Fzaz-CcY3ETp_2I5k4ZnPUVBuLezR986PcXIwGw9Z/exec", {
            method: "POST",
            headers: {
                "Content-Type":"application/x-www-form-urlencoded" //이 형식으로 넘기겠다
            },
            // body: formData
            body: qs.stringify(data) // 데이터 형식 바꿈
        }).then((res) => res.json())
    } catch(error) {
        console.log(error);
    }
}