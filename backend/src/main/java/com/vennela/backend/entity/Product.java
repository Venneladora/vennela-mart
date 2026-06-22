package com.vennela.backend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    private String category;
    private String name;
    private String price;
    private String image;
    private String products;
@Column(name = "weight")
private String weight;

public String getWeight() {
    return weight;
}

public void setWeight(String weight) {
    this.weight = weight;
}
    public Product() {
    }

    public Product(Long id, String category, String name, String price, String image) {
        this.id = id;
        this.category = category;
        this.name = name;
        this.price = price;
        this.image = image;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
    public String getProducts() {
    return products;
}

public void setProducts(String products) {
    this.products = products;
}
}