import {
  createContext,
  useContext,
  useState,
  
} from "react";

import type {ReactNode} from "react";
 import type { InterviewMessage } from "../types/InterviewMessage";
 import type { Dispatch, SetStateAction } from "react";

interface InterviewContextType {

  sessionId: number | null;

  setSessionId: (id: number | null) => void;

  question: string;

  setQuestion: (question: string) => void;

  transcript: string;

  setTranscript: (text: string) => void;

  currentQuestion: number;

  setCurrentQuestion: (value: number) => void;

  totalQuestions: number;

  setTotalQuestions: (value: number) => void;

  listening: boolean;

  setListening: (value: boolean) => void;

  speaking: boolean;

  setSpeaking: (value: boolean) => void;

  thinking: boolean;

  setThinking: (value: boolean) => void;

  messages: InterviewMessage[];

setMessages: React.Dispatch<
React.SetStateAction<InterviewMessage[]>
>;

}

const InterviewContext =
createContext<InterviewContextType | undefined>(
undefined
);

export function InterviewProvider({

children,

}:{

children:ReactNode

}){

const [messages, setMessages] =
useState<InterviewMessage[]>([]);

const [sessionId,setSessionId]=
useState<number|null>(null);

const [question,setQuestion]=
useState("");

const [transcript,setTranscript]=
useState("");

const [currentQuestion,setCurrentQuestion]=
useState(1);

const [totalQuestions,setTotalQuestions]=
useState(5);

const [listening,setListening]=
useState(false);

const [speaking,setSpeaking]=
useState(false);

const [thinking,setThinking]=
useState(false);

return(

<InterviewContext.Provider

value={{

sessionId,

setSessionId,

question,

setQuestion,

transcript,

setTranscript,

currentQuestion,

setCurrentQuestion,

totalQuestions,

setTotalQuestions,

listening,

setListening,

speaking,

setSpeaking,

thinking,

setThinking,

messages,

setMessages,

}}

>

{children}

</InterviewContext.Provider>

);

}

export function useInterview(){

const context=
useContext(InterviewContext);

if(!context){

throw new Error(
"useInterview must be used inside InterviewProvider"
);

}

return context;

}