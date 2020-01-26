package com.pj.eshopping.dto;

import com.pj.eshopping.domain.product.Photo;
import lombok.Data;

import java.util.List;

@Data
public class ProductDTO
{
	private Long id;
	private String name;
	private String description;
	private Long categoryId;
	private Long currencyId;
	private List<Photo> photoList;
}
