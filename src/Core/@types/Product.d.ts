interface ProductI extends CreateProductI {
    /**
     * Auto generated from BackEnd
     */
    "_id"?: string,
    /**
     * Auto generated from BackEnd
     */
    "user_id"?: string,
    /**
     * Auto generated from BackEnd
     */
    "parent_admin_id"?: string,
    /**
     * Auto generated from BackEnd
     */
    "source_product_id"?: string,
    /**
    * Auto generated from BackEnd
    */
    "container_id"?: string,
    /**
     * This is Used in URL
     */
    "handle"?: string,
    "ViewBtn"?:JSX.Element,
    "template_suffix"?: string | null,
    /**
     * Type of Date new date('c')
     */
    "published_at"?: string,
    "created_at"?: string,
    "updated_at"?: string,
    /**
     * Variant Level Title
     */
    /**
     * Variant Positioning
     */
    "position"?: string | number,
    "grams"?: number,
    /**
     * 
     */
    "barcode"?: string,
    "locations"?: Array<LocationI>,
    "inventory_policy"?: string,
    "taxable"?: boolean,
    "fulfillment_service"?: string,
    "variant_image"?: string | null,
    "inventory_item_id"?: string,
    "inventory_tracked"?: boolean,
    "requires_shipping"?: string,
    "is_imported"?: number,
    "source_marketplace"?: string,
    "upload_status"?: boolean
}

interface CreateProductI {
    /**
     * 
     */
    "type": "simple" | "variation",
    /**
     * Parent Level Title
     */
    "title": string,
    /**
     * E.g PUMA, NIKE Etc
     */
    "brand": string,
    /**
     * e.g : <p>Awesome Product </p>
     */
    "description": string,
    /**
     * Total Inventory
     */
    "quantity": number,
    /**
     * Selling Price
     */
    "price": number,
    /**
     * "Not Visible Individually" = for Variant Type of Items
     * "Catalog and Search" = for parent or a Single Type of Items
     */
    "visibility": "Not Visible Individually" | "Catalog and Search",
    /**
     * Stock keeping Unit Unique For Every Client
     */
    "sku"?: string,
    /**
    * Discounted Prce
    */
    "offer_price"?: number,
     /**
    *Type can be Clothing, Electronic etc
    */
   "product_type"?: string,
   /**
     * Value = "Shirt,Red,S"
     */
    "tags"?: string,
    /**
     * E.g https://img.com
     */
    "main_image"?: string,
    "variant_title"?: string,
    /**
     * 24
     */
    "weight"?: number,
    /**
     * kg,ounce,lb
     */
    "weight_unit"?: "kg" | "ounce" | "lb",
}

interface LocationI {
    /**
     * Quantity in Particular Location
     */
    "available": number,
    "admin_graphql_api_id"?: string,
    "updated_at"?: string,
    "location_id"?: string,
    "inventory_item_id"?: string,
}

export { ProductI, CreateProductI };