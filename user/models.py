from django.contrib.auth.base_user import AbstractBaseUser
from django.db import models

# Create your models here.

class User(AbstractBaseUser):
    """
        유저 프로파일 사진
        유저 닉네임
        유저 이름
        유저 이메일 주소
        유저 비밀번호 => 디폴트 사용
    """
    profile_img = models.TextField() # 프로필 이미지
    nickname = models.CharField(max_length=24)
    name = models.CharField(max_length=24)
    email = models.EmailField()

    class Meta:
        db_table = "User"
