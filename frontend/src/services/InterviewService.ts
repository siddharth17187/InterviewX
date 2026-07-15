import axios from "axios";

const API =
    "http://localhost:8080/api/interview";

export interface InterviewSetupRequest {

    topic: string;

    difficulty: string;

    totalQuestions: number;

}

export interface InterviewQuestionResponse {

    sessionId: number;

    questionNumber: number;

    question: string;

    interviewCompleted: boolean;

}

export interface InterviewAnswerRequest {

    sessionId: number;

    answer: string;

}

export interface InterviewResultResponse {

    overallScore: number;

    technicalScore: number;

    communicationScore: number;

    confidenceScore: number;

    strengths: string[];

    improvements: string[];

    overallFeedback: string;

}

export async function startInterview(

    request: InterviewSetupRequest

): Promise<InterviewQuestionResponse> {

    const response = await axios.post(

        `${API}/start`,

        request,

        {

            headers: {

                Authorization:
                    `Bearer ${localStorage.getItem("token")}`

            }

        }

    );

    return response.data;

}

export async function submitAnswer(

    request: InterviewAnswerRequest

): Promise<InterviewQuestionResponse> {

    const response = await axios.post(

        `${API}/answer`,

        request,

        {

            headers: {

                Authorization:
                    `Bearer ${localStorage.getItem("token")}`

            }

        }

    );

    return response.data;

}

export async function getInterviewResult(

    sessionId: number

): Promise<InterviewResultResponse> {

    const response = await axios.get(

        `${API}/result/${sessionId}`,

        {

            headers: {

                Authorization:
                    `Bearer ${localStorage.getItem("token")}`

            }

        }

    );

    return response.data;

}