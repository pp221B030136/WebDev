from django.shortcuts import render
from api.models import Category, Product
from django.http.response import JsonResponse
import json
from django.core import serializers

# Create your views here.
def products_list(request):
    products = Product.objects.all()

    products_json = [product.to_json() for product in products]

    return JsonResponse(products_json, safe=False)

def product_details(request, product_id):
    try:
        product = Product.objects.get(id=product_id)
    except Product.DoesNotExist as e:
        return JsonResponse({"exception": str(e)}, status=400, safe=False)

    return JsonResponse(product.to_json(), safe=False)

def categories_list(request):
    categories = Category.objects.all()
    categories_json = [category.to_json() for category in categories]

    return JsonResponse(categories_json, safe=False)

def category_details(request, category_id):
    try:
        category = Category.objects.get(id=category_id)
    except Category.DoesNotExist as e:
        return JsonResponse({"exception": str(e)}, status=400, safe=False)

    return JsonResponse(category.to_json(), safe=False)

def category_products(request, category_id):
    try:
        products = Product.objects.all().filter(categoryId=category_id)
    except Product.DoesNotExist as e:
        return JsonResponse({"exception": str(e)}, status=400, safe=False)

    products_json = [product.to_json() for product in products]
    return JsonResponse(products_json, safe=False)