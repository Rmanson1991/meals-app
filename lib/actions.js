'use server';
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

export async function shareMeal(prevState, formData){

  function isInvalidText(text){
    return !text|| text.trim() === '';
  }

  const meal = {
    title: formData.get('title'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image')
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    !meal.creator_email.includes('@') ||
    !meal.image || meal.image.size === 0
  ){
    return {
      message: 'Invalid input.'
    };
  }

  await saveMeal(meal);
  revalidatePath('/meals');
  redirect('/meals');
}