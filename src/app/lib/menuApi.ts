import { supabase } from "./supabase";

export async function addItemToCart(itemId: number) {
  const { data: existingData, error: selectError } = await supabase
    .from("cart_items")
    .select("*")
    .eq("menu_item_id", itemId)
    .eq("user_id", 1);

  if (selectError) {
    console.log(selectError);
    return;
  }

  if (existingData.length > 0) {
    console.log("already in cart");
    return;
  }

  const { error: insertError } = await supabase
    .from("cart_items")
    .insert({ menu_item_id: itemId, user_id: 1 });
  if (insertError) console.log(insertError);
  else console.log("added to cart");
}

export async function getCartItems() {
  const { data, error } = await supabase
    .from("cart_items")
    .select(
      "*, menu_item:menu_item_id(id, name, description, kcal, weight_grams, price_usd, image_url, type)"
    );

  if (error) {
    console.log(error);
    return;
  }

  return data;
}

export async function deleteItemFromCard(itemId: number) {
  const { error } = await supabase.from("cart_items").delete().eq("menu_item_id", itemId);

  if (!itemId || typeof itemId !== "number") {
    console.warn("itemId невалиден:", itemId);
    return;
  }

  if (error) {
    console.log(error);
    return;
  } else console.log("deleted from cart");
}
