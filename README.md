# heroxiao
heroxiao�ĸ��˼�������
http://heroazure.github.io/heroxiao/
����ָ��˵��

 �½���Ŀҳ�濪��

��git�����д򿪣�������롣

git clone git@github.com:heroazure/heroxiao.git

���ǰ��Լ��İ汾��Ū�������Լ�ѡ����λ�á�

git checkout --orphan gh-pages

����һ����gh-pages�ķ�֧�����ǻ����վ�������ļ����������

Ȼ���������

git rm -rf .

��Ȼ�Ƿ���վ�ĵط���ԭ������Ŀ�ļ��Ͳ���Ҫ�ˡ�ɾ�Ķ���ֻ���������֧���Ŀ�ļ��ᱣ����master��֧�С�����һ��index.html�ļ����������д�㶫����

git add index.html
git commit -a -m "First pages commit"

git push origin gh-pages

-��֧��������

git status
git add .
git status .
git commit -a -m "site"
git push origin gh-pages