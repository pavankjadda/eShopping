package com.pj.springsecurity.dto;

import com.pj.springsecurity.model.product.Photo;
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
