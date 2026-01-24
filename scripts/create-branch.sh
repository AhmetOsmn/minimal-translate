#!/bin/bash
#
# Standart branch oluşturma script'i
# Kullanım: ./scripts/create-branch.sh <type> <açıklama>
#

show_usage() {
    echo "📌 Branch Oluşturma Script'i"
    echo ""
    echo "Kullanım: ./scripts/create-branch.sh <type> <açıklama>"
    echo ""
    echo "Branch Tipleri:"
    echo "  feature   - Yeni özellik geliştirme"
    echo "  bugfix    - Bug düzeltmesi"
    echo "  hotfix    - Acil production düzeltmesi"
    echo "  release   - Release hazırlığı"
    echo "  docs      - Dokümantasyon"
    echo "  test      - Test geliştirme"
    echo "  refactor  - Kod yeniden yapılandırma"
    echo ""
    echo "Örnekler:"
    echo "  ./scripts/create-branch.sh feature dark-mode"
    echo "  ./scripts/create-branch.sh bugfix login-timeout"
    echo "  ./scripts/create-branch.sh hotfix security-patch"
    echo ""
}

# Parametre kontrolü
if [ $# -lt 2 ]; then
    show_usage
    exit 1
fi

type=$1
description=$2

# Type kontrolü
valid_types="feature bugfix hotfix release docs test refactor"
if ! echo "$valid_types" | grep -wq "$type"; then
    echo "❌ Geçersiz branch tipi: $type"
    echo ""
    echo "İzin verilen tipler: $valid_types"
    exit 1
fi

# Açıklama formatı kontrolü (küçük harf, rakam, tire)
if ! echo "$description" | grep -qE "^[a-z0-9\-]+$"; then
    echo "❌ Geçersiz branch açıklaması!"
    echo "Sadece küçük harf, rakam ve tire (-) kullanın."
    echo "Örnek: dark-mode, login-fix, api-v2"
    exit 1
fi

branch_name="${type}/${description}"

# Develop branch'ından oluştur
echo "🌿 Branch oluşturuluyor: $branch_name"
echo ""

# Develop branch'ı var mı kontrol et
if git show-ref --verify --quiet refs/heads/develop; then
    base_branch="develop"
elif git show-ref --verify --quiet refs/heads/dev; then
    base_branch="dev"
elif git show-ref --verify --quiet refs/heads/main; then
    base_branch="main"
else
    base_branch="master"
fi

echo "📍 Base branch: $base_branch"
git checkout "$base_branch"
git pull origin "$base_branch"
git checkout -b "$branch_name"

echo ""
echo "✅ Branch başarıyla oluşturuldu: $branch_name"
echo ""
echo "📝 Sonraki adımlar:"
echo "  1. Değişikliklerinizi yapın"
echo "  2. Commit edin: git commit -m \"${type}: açıklama\""
echo "  3. Push edin: git push -u origin $branch_name"
echo "  4. Pull request oluşturun: $base_branch ← $branch_name"
