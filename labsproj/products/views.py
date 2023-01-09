import os
from wsgiref.util import FileWrapper

from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets, serializers, generics
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response

from .models import Product


class ProductSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Product
        fields = ['code', 'image_url', 'name', 'quantity', 'description']


class ProductsViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def retrieve(self, request, **kwargs):
        print(request.query_params)
        print(kwargs)
        user = get_object_or_404(self.queryset, pk=kwargs.get('pk'))
        serializer = self.serializer_class(user)
        return Response(serializer.data)


class BarcodeViewSet(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    @staticmethod
    def get_extra_actions(a1, a2):
        return []

    def get(self, request, file_format=None, **kwargs):
        print(kwargs)
        if file_format == 'raw':
            file = open('/Users/Andrii_Koval1/Public/study/barcodes/repo/rr/barcode.png', 'r')
            response = HttpResponse(FileWrapper(file), content_type='image/png')
            return response


@csrf_exempt
def product_detail(request, pk):
    """
    Retrieve, update or delete a code snippet.
    """
    print(pk)
    os.system(f'node ../../repo/rr/index.js {pk}')
    file = open('barcode.png', 'rb')
    response = HttpResponse(FileWrapper(file), content_type='image/png')
    return response
    # try:
    #     snippet = Product.objects.get(pk=pk)
    # except Product.DoesNotExist:
    #     return HttpResponse(status=404)
    #
    # if request.method == 'GET':
    #     serializer = ProductSerializer(snippet)
    #     return JsonResponse(serializer.data)
